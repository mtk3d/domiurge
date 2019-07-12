import config from '../services/config';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as path from 'path';

const containersNames = (servicesPaths: any) => {
    let names: any = [];

    servicesPaths.forEach((servicePath: any) => {
        const composePath = path.join(process.cwd(), `${servicePath}/docker-compose.yml`);
        const yamlString = fs.readFileSync(composePath, 'utf8');
        const fileContent = yaml.safeLoad(yamlString);

        for (const serviceName in fileContent.services) {
            const service = fileContent.services[serviceName];
            if (service.container_name) {
                names.push(service.container_name);
            }
        }
    });

    return names;
};

export default containersNames;