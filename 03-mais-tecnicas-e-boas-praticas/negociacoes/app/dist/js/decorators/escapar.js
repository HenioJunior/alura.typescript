export function escapar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let retorno = metodoOriginal.apply(this, args);
            if (typeof retorno === 'string') {
                console.log(`@@@ escapar em ação na classe ${this.constructor.name} para o método ${propertyKey} `);
                retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        };
        return descriptor;
    };
}