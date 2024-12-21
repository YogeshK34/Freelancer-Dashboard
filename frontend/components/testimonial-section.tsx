import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "This freelance dashboard made managing my clients and projects effortless. It’s a must-have tool for any freelancer.",
      name: "Walter White",
      designation: "Chemistry Teacher at Albuquerque High School",
      src: "https://th.bing.com/th/id/R.c37ec7b017b3ee60ca54cf3ed6d5bfd2?rik=4wFwAVhd9Se5fg&riu=http%3a%2f%2fbaltimorepostexaminer.com%2fwp-content%2fuploads%2fWalter-White_FB.jpg&ehk=8%2fCI5P6ZyQ1Zj0J1%2bGgH4zUu5H2oQztI6ixTMJ0mppg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quote:
        "The insights provided by this dashboard have revolutionized how I track my freelance earnings and expenses. Highly recommended!",
      name: "Tyler Durden",
      designation: "CTO at Fig**Cl**",
      src: "https://wallpapercave.com/wp/wp2657416.jpg",
    },
    {
      quote:
        "Having all my freelance projects and deadlines in one place is a game-changer. I can focus more on delivering quality work.",
      name: "Thomas Shelby",
      designation: "Owner of Garrison Pub",
      src: "https://wallpapercave.com/wp/wp4966941.jpg",
    },
    {
      quote:
        "The client management features are top-notch. This dashboard has streamlined my entire freelance workflow.",
      name: "Professor Snape",
      designation: "Teacher at Hogwarts",
      src: "https://wallpaperaccess.com/full/1585633.jpg",
    },
    {
      quote:
        "The time tracking and invoicing tools in this dashboard have saved me countless hours. It’s a freelancer’s best friend.",
      name: "Bruce Wayne",
      designation: "Philanthropist and Entrepreneur",
      src: "https://images.hdqwalls.com/download/the-batman-robert-pattinson-4k-zt-2560x1600.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
