import styles from "./RouteList.module.css"

export default function RouteList(props) {

    return (
        <div className={styles.wrapper}>
            
            {
    
                props.routes.map((route,index) => {

                    return (
                        <div key={index} onClick={() => {props.SelectRoute(route)}} className={styles.route}>
                            <div>{route.route_id}</div>
                            <div>{route.location}</div>
                            <div>{route.environment}</div>
                            <div>{route.time_of_day}</div>
                            <div>{route.emotion_1}</div>
                            <div>{route.emotion_2}</div>
                            <div onClick={(e) => { e.stopPropagation(); props.RemoveRoute(route.route_id); }} className={styles.button}>Remove</div>
                        </div>
                    )

                })
                
            }

            <div className={styles.add_new_route}>
                <div onClick={props.AddRoute}>Add New Route</div>
            </div>

        </div>
    )
}