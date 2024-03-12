import { useState } from "react"


export const TaskList = () => {

    const [listTask, setlistTask] = useState([{
        name: 'English Task',
        time: '12-03-2024',
        state: false,
        porcentaje: 98,
        id: 0
    }, {
        name: 'Developed Task',
        time: '12-03-2024',
        state: true,
        porcentaje: 98,
        id: 1
    }

    ])


    return (
        <>
            <div>
                <h2>Estado de las Tareas</h2>
                <ol>
                    {listTask.map(tarea => (
                        <li key={tarea.id + 1}>
                            {tarea.name}
                            {tarea.time}
                            {tarea.state?'😄':'🥱'}
                        </li>
                    ))

                    }

                </ol>

            </div>
        </>
    )
}
