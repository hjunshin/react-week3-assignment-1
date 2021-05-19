import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';

describe('<List />', () => {
  const tasks = [
    {
      id: 1,
      title: '뭐라도 하기',
    },
    {
      id: 2,
      title: '뭐라도 하기 2',
    },
  ];
  const emptyTasks = [];

  it('renders text when tasks does not exist', () => {
    render(<List tasks={emptyTasks} />);

    expect(screen.getByText('할 일이 없어요!')).toBeInTheDocument();
  });

  it('renders tasks', () => {
    render(<List tasks={tasks} />);

    expect(screen.getByText(tasks[0].title)).toBeInTheDocument();
    expect(screen.getByText(tasks[1].title)).toBeInTheDocument();
  });

  it('calls onClickDelete', () => {
    const onClickDelete = jest.fn();

    render(<List tasks={tasks} onClickDelete={onClickDelete} />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onClickDelete).toBeCalledWith(tasks[0].id);
  });
});
