export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center ">
      <p className="text-8xl capitalize bg-blue-500">{params.id}</p>
      <h1 className="text-5xl text-gray-700">Welcome to futuraaa!</h1>
      <br />
    </div>
  );
}
