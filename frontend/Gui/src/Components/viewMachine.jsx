import React, {useCallback} from 'react'
import useMachine from "../Hooks/useMachine";
import machine from "../Machine"
import {Alert, Input, Spin} from "antd";

const ViewMachine = (props) => {
    const [state, context, send, can] = useMachine(machine);
    const editMod = !["idle", "success"].includes(state);
    console.log('render');
    const dismiss = useCallback(() => {
        send('dismiss')
    }, [send]);

    return (
        <div>
            <p style={{marginTop: "100px", textAlign: 'center'}}>Interface de test de ma machine à état</p>
            {state === "success" && <Alert style={{width: "500px", margin: "auto", marginBottom: "10px"}}
                                           message="Le titre a bien été sauvegarder avec success"
                                           description="le détail est vide pour l'instant"
                                           type="success"
                                           showIcon
                                           closable={true}
                                           onClose={dismiss}
            />}
            {state === "error" && <Alert style={{width: "500px", margin: "auto", marginBottom: "10px"}}
                                         message="Une erreur esr survenu côté serveur"
                                         description={context.error}
                                         type="error"
                                         showIcon
                                         closable={true}
                                         onClose={dismiss}
            />}

            <div className="machine1">
                {state === "loading" && <Spin/>}
                {!editMod ? (<h1>{context.title}</h1>) :
                    <Input
                        placeholder="Entrer un titre"
                        disabled={!can("input")}
                        onChange={(e) => send("input", {value: e.target.value})}
                    />
                }
                {editMod ? <div className="machine">
                        <button disabled={!can("submit")}
                                style={{backgroundColor: "#1d4851", color: "white", marginLeft: "5px", width: "100px"}}
                                onClick={() => send("submit")}>Envoyer
                        </button>
                        <button disabled={!can("cancel")} style={{marginLeft: "5px", width: "100px"}}
                                onClick={() => send("cancel")}>Annuler
                        </button>
                    </div> :
                    <button style={{marginLeft: "5px", width: "100px"}} onClick={() => send("edit")}>Editer</button>
                }
            </div>
            <hr/>
            <p style={{marginTop: "20px", textAlign: 'center'}}> Etat actuel de la machine => <strong>{state}</strong>
            </p>
            <p style={{marginTop: "20px", textAlign: 'center'}}> Context actuel de la machine
                => <strong>{JSON.stringify(context)}</strong></p>
        </div>
    )
};

export default ViewMachine