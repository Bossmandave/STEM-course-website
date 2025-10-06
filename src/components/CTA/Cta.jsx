
const Cta = () => {
  return (
    <div className="py-8">
        <div className="bg-blue-900 xl:w-[1200px] w-[95%] mx-auto text-white text-center rounded-xl sm:px-10 px-4 py-10">
            <h1 className="sm:text-[30px] text-[28px] font-medium mb-2">Subscribe to get update for every new course</h1>
            <p className="mb-4">Be the first to get the latest updates from our fast-growing community of African youths.</p>
            <form>
                <div className="flex justify-center gap-4">
                    <input type="text" name="emali" id="email" placeholder="Add your Email address" className="sm:w-[450px] w-full rounded-md px-5 text-black" />
                    <button className="sm:px-10 px-5 sm:py-3 py-2 rounded-md bg-primary text-white">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Cta