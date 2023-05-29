import { useEffect, useState } from 'react'

import useTasks from '@/hooks/useTasks'
import OngoingTasksList from '@/components/OngoingTasksList'
import CompletedTasksList from '@/components/CompletedTasksList'
import Navbar from '@/components/Navbar'
import AddTaskInput from '@/components/AddTaskInput'

export default function Home() {
  const { tasks, closeExpandedCards } = useTasks()
  const [tasksStore, setTasksStore] = useState<Task[] | undefined>()

  useEffect(() => {
    closeExpandedCards()
  }, [])

  useEffect(() => {
    setTasksStore(tasks)
  }, [tasks])

  const isAnyCompletedTask =
    tasksStore?.filter((task) => task.isTaskDone).length !== 0

  return (
    <>
      <div className="relative mx-auto my-10 flex w-11/12 max-w-xl flex-col gap-14">
        <Navbar />
        <AddTaskInput />
        <OngoingTasksList tasks={tasksStore} />
        {isAnyCompletedTask && <CompletedTasksList tasks={tasksStore} />}
      </div>
    </>
  )
}
