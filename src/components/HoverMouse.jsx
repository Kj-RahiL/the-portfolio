import { motion } from "framer-motion";
import { useRef } from 'react';
import { useFollowPointer } from "../Layouts/useFollowPointer";


const HoverMouse = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <motion.div
        ref={ref}
        className="box border-2 border-green-950 w-16 h-16 rounded-full absolute z-10"
        animate={{ x, y }}
        transition={{
            type: "spring",
            damping: 1,
            stiffness: 10,
            restDelta: 0.001
        }} />
    );
};

export default HoverMouse;