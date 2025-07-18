import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-healthcare-blue via-healthcare-teal to-healthcare-green text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  Expert Healthcare
                  <span className="block text-yellow-300">At Your Home</span>
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-blue-100">
                  &quot;Led by Nurses. Trusted by Families&quot;
                </p>
                <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                  Nurse-owned and operated home healthcare company bringing
                  clinical precision and compassion into every home we serve in
                  Austin, TX and surrounding counties.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-healthcare-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-healthcare-blue transition-colors text-lg"
                >
                  Learn About Our Services
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-gray-200">Emergency Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-sm text-gray-200">Counties Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-200">Nurse-Owned</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  {/* Placeholder for hero image - replace with actual healthcare image */}
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg
                        className="h-12 w-12"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      Professional Healthcare Image
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-healthcare-navy text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-2 md:mb-0">
              <span className="text-yellow-300 font-semibold">
                Now Accepting New Referrals!
              </span>
              <span className="ml-2">Call us today to get started</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:8005532892"
                className="text-xl font-bold hover:text-yellow-300 transition-colors"
              >
                (800) 553-2892
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="mailto:referrals@allnurseshomehealth.com"
                className="hover:text-yellow-300 transition-colors"
              >
                referrals@allnurseshomehealth.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-healthcare-navy mb-4">
              Comprehensive Home Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced, certified nurses provide specialized care
              tailored to your unique needs, all from the comfort and safety of
              your own home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skilled Nursing Services",
                description:
                  "Comprehensive nursing care including assessments, care coordination, and health screening by licensed RNs.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                link: "/services/skilled-nursing",
              },
              {
                title: "Wound Care Management",
                description:
                  "Expert wound care including complex wound management, compression therapy, and selective sharp debridement.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                link: "/services/wound-care",
              },
              {
                title: "Post-Surgical Recovery",
                description:
                  "Specialized post-operative care including dressing changes, surgical site monitoring, and recovery support.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                link: "/services/post-surgical",
              },
              {
                title: "Medication Management",
                description:
                  "Safe medication administration, education, and monitoring to ensure optimal therapeutic outcomes.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                link: "/services/medication-management",
              },
              {
                title: "Chronic Disease Management",
                description:
                  "Ongoing support for diabetes, hypertension, and other chronic conditions with education and monitoring.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
                link: "/services/chronic-disease",
              },
              {
                title: "IV Therapy & Infusions",
                description:
                  "Safe IV antibiotic administration, infusion therapy, and venipuncture services in your home.",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                ),
                link: "/services",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-healthcare-blue text-white rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-healthcare-navy">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-healthcare-blue font-medium hover:text-healthcare-navy transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-healthcare-blue text-white font-semibold rounded-lg hover:bg-healthcare-navy transition-colors"
            >
              View All Services
              <svg
                className="h-5 w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-heading font-bold text-healthcare-navy mb-6">
                  Why Choose All Nurses Home Health?
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We&apos;re not just providers. We&apos;re partners in healing,
                  bringing both clinical excellence and compassionate care to
                  every home we serve.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Nurse-Owned & Operated",
                    description:
                      "Founded and led by experienced registered nurses who understand healthcare from the inside out.",
                  },
                  {
                    title: "Advanced Certifications",
                    description:
                      "Our team holds specialized certifications in wound care, infusion therapy, and selective sharp debridement.",
                  },
                  {
                    title: "24/7 Emergency Support",
                    description:
                      "Round-the-clock availability for urgent situations and peace of mind for patients and families.",
                  },
                  {
                    title: "Insurance Accepted",
                    description:
                      "We work with most commercial insurance plans and offer private pay options for your convenience.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-healthcare-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-healthcare-navy mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-healthcare-blue/10 to-healthcare-teal/10 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-healthcare-blue rounded-full mx-auto flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-healthcare-navy">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed healthcare professionals with comprehensive
                  insurance coverage for your protection and peace of mind.
                </p>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 mb-2">Service Areas</p>
                  <p className="font-semibold text-healthcare-navy">
                    Austin, Travis, Bastrop, Caldwell,
                    <br />
                    Williamson, Hays, Burnet & Blanco Counties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-healthcare-navy mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from the families
              we&apos;ve served
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="font-semibold text-healthcare-navy not-italic">
                    {testimonial.author}
                  </cite>
                  {testimonial.location && (
                    <span className="text-sm text-gray-500">
                      {testimonial.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 border-2 border-healthcare-blue text-healthcare-blue font-semibold rounded-lg hover:bg-healthcare-blue hover:text-white transition-colors"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-healthcare-navy text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-heading font-bold">
              Ready to Experience Expert Home Healthcare?
            </h2>
            <p className="text-xl text-gray-200">
              Join the families who trust All Nurses Home Health for
              compassionate, professional care in the comfort of their own
              homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-healthcare-teal text-white font-semibold rounded-lg hover:bg-healthcare-green transition-colors text-lg"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (800) 553-2892
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-healthcare-navy transition-colors text-lg"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-8 border-t border-gray-600">
              <p className="text-gray-300">
                <span className="font-semibold text-yellow-300">
                  Now Accepting New Referrals
                </span>
                <span className="mx-2">•</span>
                <span>Most Insurance Plans Accepted</span>
                <span className="mx-2">•</span>
                <span>24/7 Emergency Support</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
