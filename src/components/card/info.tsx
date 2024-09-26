
import { motion } from "framer-motion"
import { CarType } from "../../types"


type Props = {

    img: string,
    text: string
}

const Field = ({ img, text }: Props) => {


    return (
        <motion.div
        initial={{translateY:"50px",
            opacity:0.3,
        }}
        whileInView={{translateY:0,
            opacity:1,

        }}
        className="relative flex-center flex-col">
            <img src={img} width={25} />
            <p>{text}</p>
        </motion.div>

    )
}

const Info = ({ car }: { car: CarType }) => {
    const transmission = car.transmission === "a" ? "Otomatik" : "Manuel"
    const drive =
    car.drive === "fwd"
      ? "Önden Çeker"
      : car.drive == "rwd"
      ? "Arkadan İtişli"
      : "Dört Çeker";  
    return (
        <div className="flex group-hover:hidden justify-between w-full">
            <Field img="/steering-wheel.svg" text={transmission} />
            <Field img="/tire.svg" text={drive} />
            <Field img="/gas.svg" text={car.fuel_type} />



        </div>
    )
}

export default Info