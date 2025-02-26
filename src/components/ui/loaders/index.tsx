import { motion } from 'framer-motion';

export default function PulsatingDots() {
    return (
        <div className="flex items-center justify-start ml-12">
            <div className="flex space-x-2">
                <motion.div
                    className="h-3 w-3 rounded-full bg-white"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="h-3 w-3 rounded-full bg-white"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 0.3,
                    }}
                />
                <motion.div
                    className="h-3 w-3 rounded-full bg-white"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: 0.6,
                    }}
                />
            </div>
        </div>
    );
}
