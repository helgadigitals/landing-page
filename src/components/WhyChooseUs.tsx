import { Timer, Zap, ZoomIn } from "lucide-react";
import { whyChooseUs } from "../lib/data";

// Define a type for the icons
type IconName = "Timer" | "Zap" | "ZoomIn";

// Map the icon names to their respective components
const iconComponents: Record<IconName, React.ComponentType> = {
    Timer,
    Zap,
    ZoomIn,
};

const WhyChooseUs = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <p className="mb-4 text-sm text-muted-foreground lg:text-base">
                    OUR VALUES
                </p>
                <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
                <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
                    {whyChooseUs.map((item, index) => {
                        // Cast item.icon to the IconName type
                        const IconComponent = iconComponents[item.icon as IconName];
                        return (
                            <div key={index} className="rounded-lg bg-accent p-5">
                                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                                    {IconComponent && <IconComponent />}
                                </span>
                                <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                                <p className="leading-7 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
