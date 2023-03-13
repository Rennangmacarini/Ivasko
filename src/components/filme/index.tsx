import styles from "./styles.module.scss"

export function Video(){
    return(
        <div className={styles.video}>
            <iframe className={styles.iframe} src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsuperivasko%2Fvideos%2F1081575755844626%2F&show_text=false&width=560&t=0"></iframe>
        </div>
    )
}