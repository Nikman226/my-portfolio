import Image from 'next/image'

export default function About() {
return (
 <div className="min-h-screen pt-20 text-white relative overflow-hidden">
   <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
   <main className="container mx-auto px-6 py-8 relative z-10">
     <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
     <div className="flex flex-col md:flex-row items-center justify-center gap-8">
       <Image
         src="picture.jpg"
         alt="Abdoul Razack Nikiema"
         width={300}
         height={300}
         className="rounded-lg shadow-lg animate-float"
       />
       <div className="max-w-2xl bg-white/10 p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
         <p className="text-gray-200 mb-4">
           I am an Embedded and IoT Systems Developer based in Ouagadougou, Burkina Faso. 
           My passion lies in developing energy-saving solutions for homes and technical premises.
         </p>
         <p className="text-gray-200 mb-4">
           Currently pursuing a Master&apos;s in Artificial Intelligence at Burkina Institute of Technology 
           and a Bachelor&apos;s in Computer Science at the University of The People, USA.
         </p>
         <p className="text-gray-200">
           As a community leader, I strive to make a positive impact through my work in technology 
           and my involvement in various community health initiatives.
         </p>
       </div>
     </div>
   </main>
 </div>
)
}