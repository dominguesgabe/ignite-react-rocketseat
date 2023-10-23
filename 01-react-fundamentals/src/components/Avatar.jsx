import styles from "./Avatar.module.css"

export function Avatar({ source, hasBorder }) {
    return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={source} />
}