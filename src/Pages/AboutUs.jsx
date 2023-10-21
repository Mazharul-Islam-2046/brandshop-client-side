
import Navbar from '../Componants/Navbar';
import Footer from '../Componants/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <div className='h-[80vh] w-3/5 mx-auto flex flex-col justify-center items-center text-center'> 
                <h1 className='text-5xl font-bold'>About Us</h1>
                <p className='text-xl font-medium mt-10'>At Your Website Name, we are not just in the business of selling cars; we are in the business of fulfilling dreams. Our passion for automobiles drives us to provide the best selection and service to our valued customers. With years of experience, we have honed our expertise, ensuring that each vehicle on our lot represents quality, reliability, and style. Our dedicated team of automotive enthusiasts is here to guide you through every step of your car-buying journey. From expert advice to personalized assistance, we are committed to making your experience as smooth as a well-tuned engine. Come visit us today and discover why we are not just your average car shop, but your partner in automotive aspirations. Your dream ride awaits, and we are here to make it a reality.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;