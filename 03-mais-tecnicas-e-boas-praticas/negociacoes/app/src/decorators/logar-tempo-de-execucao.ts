export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            
            console.log("--------- Logar Tempo De Execução ")

            let divisor = 1;
            
            let unidade = 'milisegundos';
            
            if(emSegundos) {
                unidade = 'segundos'
                divisor = 1000;
            }

            const t1 = performance.now();
            
            const retorno = metodoOriginal.apply(this, args);
            
            const t2 = performance.now();
            
            console.log(`--------- Método: ${propertyKey}, Tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
            
            retorno
        };

        return descriptor;
    }
}