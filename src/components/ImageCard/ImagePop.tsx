import styles from "./ImagePop.module.css"

type PopProps = {
    url:string;
  setIsOpen: () => void;
}


export default function ImagePop({url,setIsOpen}:PopProps) {
    return (
        <div className={styles.PopUp} onClick={setIsOpen}>
            <img src={url} alt="" />
        </div>
    )
}
