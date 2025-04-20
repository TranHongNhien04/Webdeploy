import BackgroundImage from "../assets/img/backgrounds.png";
import HeroRecipeCard from "./HeroRecipeCard";

export default function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="absolute top-1/2 left-[8%] transform -translate-x-1/2 -translate-y-1/2">
                <HeroRecipeCard />
            </div>
        </section>
    );
}