'use client'
import ActionCard from './ActionCard'
import { useAppSelector } from '@/redux/store/hook'

export default function DisplayActionCards() {
  const data = useAppSelector(store => store.sidebarActions)
  return (
    <div className='flex flex-col gap-2'>
      {data.map((el, key) => (
        <div key={key} className="">
          <ActionCard title={el.type} user={el.user} amount={el.amount} />
        </div>
      ))}
    </div>
  )
}
