export default function ProjectCard({
  title,
  desciption,
  delivery,
}: ProjectCardProps) {
  return (
    <li className='p-2 rounded border border-gray-300 dark:border-gray-500 space-y-1 hover:bg-primary-700/5 dark:hover:bg-primary-500/20'>
      <h2 className='text-base font-medium text-black dark:text-white'>
        {title}
      </h2>
      <p className='text-base text-black dark:text-white'>{desciption}</p>
      <p className='text-base text-primary-700 dark:text-primary-500'>
        Delivery: {delivery}
      </p>
    </li>
  );
}
