export default function DotsLoader() {
  return (
    <>
      <div className='relative w-full flex items-center justify-center invert-0 dark:invert'>
        <span
          className='w-2 h-2 block relative text-black box-border rounded-full -left-24 my-4 mx-auto'
          style={{ animation: 'shadowRolling 2s linear infinite' }}
        ></span>
      </div>
    </>
  );
}
