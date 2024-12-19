import Image from "next/image";
import Button from "./Button";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <section
                id="about"
                className="flex flex-col items-center justify-center w-full text-white py-16 md:py-24"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-orange-500 font-bold italic text-2xl sm:text-2xl text-center tracking-wide font-serif">
                            About
                        </p>
                        <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-wider mt-4">
                            WHO I AM
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
                        <div className="md:mr-8 flex-shrink-0">
                            <Image
                                src="/prof_photo.jpg"
                                alt="Profile Picture"
                                width={200}
                                height={200}
                                className="rounded-full border border-orange-500 mb-4"
                            />
                            <Button text="Resume" link="/#projects" />
                        </div>

                        <div className="md:pl-6 flex-1 space-y-4">
                            <p className="text-lg sm:text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            
                            <p className="text-lg sm:text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                    </div>

            
                </div>
            </section>
        </div>
    );
}
