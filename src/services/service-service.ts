import Service from '../entities/Service';

export default class ServiceService {
    services: Array<Service> = [];

    constructor(services: Array<Service>) {
        this.services = services;
    }
    
    getAllServices() : Array<Service> {
        return this.services;
    }

    getService(name: string) : Service | null {
        const service = this.services
            .find((service: Service) => {
                return service.name === name;
            });
        
        return service || null;
    }

    runService(name: string) : void {
        const service = this.getService(name);
        if (service) {
            service.up();
        }
    }

    killService(name: string) : void {
        const service = this.getService(name);
        if (service) {
            service.down();
        }
    }

    rebuildService(name: string) : void {
        const service = this.getService(name);
        if (service) {
            service.rebuild();
        }
    }

    getStatusOfAll() : Array<Object> {
        return this.services
            .map((service: Service) => {
                return {
                    [service.name]: service.status
                };
            });
    }
}