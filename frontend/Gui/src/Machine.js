import {createMachine, guard, interpret, invoke, reduce, state, transition} from "robot3";

const wait = (duration) => {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve()
        }, duration)
    })
};

const machine = createMachine('edit', {
    idle: state(
        transition("edit", "edit")
    ),
    edit: state(
        transition("cancel", "idle"),
        transition("submit",
            "loading",
            guard((ctx) => ctx.editedTitle && ctx.editedTitle !== ctx.title)),
        transition("input",
            "edit",
            reduce((ctx, ev) => ({...ctx, editedTitle: ev.value})))
    ),
    loading: invoke(() => wait(2000),
        transition("done", "success"),
        transition("error", "edit")
    ),
    success: state()
}, () => ({
    title: 'salut'
}));

const service = interpret(machine, () => {
    console.log('Etat de la machine: ', service.machine.current);
    console.log('Context: ', service.context)
});
window.send = service.send;
