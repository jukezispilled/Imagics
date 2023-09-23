import blur from "/public/blur.png";
import example from "/public/example.png";
import result from "/public/result.png";

export default function ExplainerSection() {
  return (
    <div>
      <div className="w-screen">
          <div className="h-min py-20 bg-slate-100 border border-slate-300 mx-8 lg:mx-32 rounded-lg">
            <div className="mb-8">
              <h2 className="text-[56px] font-extrabold text-center outline-2 mb-1 p-2">How it Works</h2>

              {/* Step 1: Upload your images */}
              <div className="space-y-6 pb-4">
                <div className="flex items-center justify-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold">Upload your images</h3>
                </div>
                <p className="text-md text-gray-600 text-center">
                  Upload 4+ high-quality selfies: front facing, 1 person in frame, no
                  glasses or hats.
                </p>
                <img
                  src={example.src}
                  alt="AI Headshot example"
                  className="rounded-lg object-cover w-full md:w-3/5 mx-auto"
                />
              </div>

              {/* Step 2: Train your model */}
              <div className="space-y-6 pb-4">
                <div className="flex items-center justify-center space-x-3 mt-3">
                  <h3 className="text-3xl font-bold">Our AI gets to work</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <p className="text-md text-gray-600 text-center">
                  The AI magic takes ~20 minutes. You'll get an email when its ready!
                </p>
                <img
                  src={blur.src}
                  alt="AI Headshot blur"
                  className="rounded-lg object-cover w-full md:w-3/5 mx-auto"
                />
              </div>

              {/* Step 3: Generate images */}
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold">Get amazing headshots</h3>
                </div>
                <p className="text-md text-gray-600 text-center">
                  Once your model is trained, we'll give you amazing headshots!
                </p>
                <img
                  src={result.src}
                  alt="AI Headshot result"
                  className="rounded-lg object-cover w-full md:w-3/5 mx-auto"
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
