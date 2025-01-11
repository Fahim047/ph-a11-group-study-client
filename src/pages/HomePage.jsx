import Banner from '../components/Banner/Banner';
import AboutUs from '../components/Sections/AboutUs';
import ContactUs from '../components/Sections/ContactUs';
import FaqSection from '../components/Sections/FaqSection';
import FeaturesSection from '../components/Sections/FeaturesSection';

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FeaturesSection />
			<AboutUs />
			<FaqSection />
			<ContactUs />
		</div>
	);
};

export default HomePage;
