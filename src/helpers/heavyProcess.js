export const heavyProcess = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log("...Runing task");
    }
    return `${iteraciones} iteraciones realizadas`
}