interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
}

interface AuthFormProps {
  type: 'signup' | 'signin';
}

interface ProjectCardProps {
  title: string;
  desciption: string;
  delivery: string;
  state: 'todo' | 'progress' | 'done';
}
