import Image from 'next/image'
import Permutations from '@/app/permutations';
import FindOdd from '@/app/findOdd';
import CountSmileys from '@/app/countSmileys';
import { describe, test, expect } from '@jest/globals';

export default function Home() {
  return (
    <div>
      <Permutations></Permutations>
      <FindOdd></FindOdd>
      <CountSmileys></CountSmileys>
    </div>
  )
}
