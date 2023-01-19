import ProjectCard from './card';

export default function Main() {
  return (
    <div className='grid grid-cols-3 gap-11'>
      <ul>
        <li className='text-base font-medium text-black dark:text-white mb-5'>
          To do
        </li>
        <ul className='space-y-5'>
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi explicabo deleniti'
            delivery='Jun 25, 2023'
            state='todo'
          />
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus quis aliquid repellendus exercitationem temporibus reiciendis inventore quia maiores nulla corporis, magni beatae quo minus sint nam modi omnis? Unde?'
            delivery='Jun 25, 2023'
            state='todo'
          />
        </ul>
      </ul>
      <ul>
        <li className='text-base font-medium text-black dark:text-white mb-5'>
          In Progress
        </li>
        <ul className='space-y-5'>
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi explicabo deleniti'
            delivery='Jun 25, 2023'
            state='progress'
          />
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi explicabo deleniti'
            delivery='Jun 25, 2023'
            state='progress'
          />
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi explicabo deleniti'
            delivery='Jun 25, 2023'
            state='progress'
          />
        </ul>
      </ul>
      <ul>
        <li className='text-base font-medium text-black dark:text-white mb-5'>
          Done
        </li>
        <ul className='space-y-5'>
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque sequi explicabo deleniti'
            delivery='Jun 25, 2023'
            state='done'
          />
          <ProjectCard
            title='Title test for the project'
            desciption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias delectus quis aliquid repellendus exercitationem'
            delivery='Jun 25, 2023'
            state='progress'
          />
        </ul>
      </ul>
    </div>
  );
}
