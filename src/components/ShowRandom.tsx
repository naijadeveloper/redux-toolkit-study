const ShowRandom = () => {
  return (
    <div className="flex w-[90%] flex-col items-center justify-center rounded-md bg-gray-900 p-[20px] drop-shadow-[0px_0px_50px_seagreen] md:w-[70%] lg:w-[50%]">
      <section>
        {/* section for new quotes */}
        <q className="font- font-mono text-[17px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          magnam consectetur nesciunt vitae! Quisquam quas beatae nostrum
          doloribus porro quaerat atque eveniet mollitia corrupti earum autem
          asperiores, ipsam sed! Minima consectetur veritatis perferendis
          exercitationem laborum consequuntur voluptates quidem ratione ipsam
          porro, libero, illo iure totam deleniti molestias dignissimos quaerat
          repellendus, quo magni velit! Aliquid dicta nobis quas quaerat ut
        </q>
        <p className="text-right text-lg text-gray-300">- Dr seuss</p>
      </section>
      <button className="mt-[5px] rounded-sm bg-green-700 p-2 px-6 text-lg transition-all duration-150 hover:bg-green-600">
        Motivate moi
      </button>
    </div>
  );
};

export default ShowRandom;
