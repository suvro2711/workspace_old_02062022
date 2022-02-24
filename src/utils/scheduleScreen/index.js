export const getHeight = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'dateScreen') {
        var elementDimention = e.target.getBoundingClientRect();
        var clickX = e.clientY - elementDimention.top;
        setTaskList([
            ...taskList,
            { top: clickX }
        ])
    }
}