import { Armchair, Shield, } from "lucide-react";

export default function Why() {
    const features = [
        {
            icon: <Armchair size={60} className="text-[var(--color-orange)]" />,
            title: "Freedom to Train Anywhere",
            description: "We train you where you want to train. with great way"
        },
        {
            icon: <Shield size={60} className="text-[var(--color-orange)]" />,
            title: "Safe & Secure",
            description: "Your safety is our priority. Train with confidence."
        },
        {
            icon: <Armchair size={60} className="text-[var(--color-orange)]" />, // Using Armchair as placeholder, can be changed
            title: "Expert Guidance",
            description: "Learn from the best in the field with personalized coaching."
        }
    ];

    return (
        <div className="px-6 md:px-20 py-24 bg-white">
            <h2 className="text-center text-gray-800">
                Why <span className="text-[var(--color-orange)]">Quwah Zone?</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl transition-shadow duration-300 border border-transparent">
                        <div className="mb-6 p-4 rounded-full bg-orange-50">
                            {feature.icon}
                        </div>
                        <h3 className="text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
