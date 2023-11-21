function Steps() {
  return (
    <div className="w-[25%] h-100 left-sidebar p-8">
      <div className="flex text-[0.75em] text-start mb-4">
        <div className="w-8 h-8 border-[1px] border-gray-200 rounded-full flex items-center justify-center bg-gray-200">
          <span className="text-black text-sm font-bold ">1</span>
        </div>
        <div className="ps-3">
          <h2>STEP 1</h2>
          <h2 className="font-bold">YOUR INFO</h2>
        </div>
      </div>

      <div className="flex text-[0.75em] text-start mb-4">
        <div className="w-8 h-8 border-[1px] border-white rounded-full flex items-center justify-center">
          <span className="text-white text-sm">2</span>
        </div>
        <div className="ps-3">
          <h2>STEP 2</h2>
          <h2 className="font-bold">SELECT PLAN</h2>
        </div>
      </div>

      <div className="flex text-[0.75em] text-start mb-4">
        <div className="w-8 h-8 border-[1px] border-white rounded-full flex items-center justify-center">
          <span className="text-white text-sm">3</span>
        </div>
        <div className="ps-3">
          <h2>STEP 3</h2>
          <h2 className="font-bold">ADD-ONS</h2>
        </div>
      </div>

      <div className="flex text-[0.75em] text-start mb-4">
        <div className="w-8 h-8 border-[1px] border-white rounded-full flex items-center justify-center">
          <span className="text-white text-sm">4</span>
        </div>
        <div className="ps-3">
          <h2>STEP 4</h2>
          <h2 className="font-bold">SUMMARY</h2>
        </div>
      </div>
    </div>
  );
}

export default Steps;
