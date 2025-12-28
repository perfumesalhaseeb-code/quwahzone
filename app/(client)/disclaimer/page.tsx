import React from "react";

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-[--color-orange] mb-4">⚠️ DISCLAIMER</h1>
                <h2 className="text-3xl md:text-4xl">Important Notice</h2>
            </div>

            <div className="space-y-8 text-lg">
                <section>
                    <p>
                        The information provided on <span className="font-bold">Quwah Zone</span> is for educational and informational purposes only.
                    </p>
                </section>

                <section>
                    <h3 className="text-[--color-orange] text-2xl md:text-3xl mb-4">Fitness Disclaimer</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>All exercises and training programs are followed at your own risk</li>
                        <li>Results may vary from person to person</li>
                        <li>Always consult a qualified professional before starting any fitness program, especially if you have medical conditions</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-[--color-orange] text-2xl md:text-3xl mb-4">Quwah Zone is not responsible for:</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Injuries</li>
                        <li>Health issues</li>
                        <li>Loss or damage resulting from training practices shown on this website or related platforms</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-[--color-orange] text-2xl md:text-3xl mb-4">No Medical Advice</h3>
                    <p>
                        Content on this website does not replace medical advice, diagnosis, or treatment.
                    </p>
                </section>

                <section>
                    <h3 className="text-[--color-orange] text-2xl md:text-3xl mb-4">External Links</h3>
                    <p>
                        Quwah Zone may include links to external websites. We are not responsible for their content or policies.
                    </p>
                </section>

                <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <h4 className="text-2xl md:text-3xl mb-2">🖤 FINAL NOTE</h4>
                    <p className="text-xl font-medium italic">"Train smart. Train disciplined."</p>
                </div>
            </div>
        </div>
    );
}
