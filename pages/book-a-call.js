import HeaderController from "@/Components/Header-Controller/HeaderController";
import { BookACallPage } from "@/Web_pages";

export default function BookCall() {
    return (
        <>
            <HeaderController
                fav_icon="/assets/logo.png"
                image="/assets/logo.png"
                title="Book a Free Discovery Call"
                description="Schedule a free 1 hour call with our experts to discuss your project needs, goals, and timelines."
                keywords="book a call, discovery call, contact byte pulse, schedule meeting, talk to software experts, hire web development agency"
                url="https://bytepulse.co/book-a-call"
            />
            <BookACallPage />
        </>
    );
}
