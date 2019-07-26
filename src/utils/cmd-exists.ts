import exec from './exec';

export default (name: string) : boolean => {
    const script = `if ! type ${name} > /dev/null; then echo 0; else echo 1; fi`;
    return exec(script) === '1';
}