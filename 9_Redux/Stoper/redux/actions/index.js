const TEST = "TEST";

const sendTest = (counter) => {
    return {
        type: TEST,
        payload: counter
    }
}

export {
    TEST,
    sendTest
}