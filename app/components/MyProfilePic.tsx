import Image from "next/image";

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="shadow-black rounded-full mx-auto mt-8 border-4 border-black dark:border-slate-500 drop-shadow-xl max-h-[200px] object-cover"
        src="/images/profile.jpg"
        width={200}
        height={200}
        alt="CBC"
        priority
      />
    </section>
  );
};

export default MyProfilePic;
