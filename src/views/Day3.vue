<template>
  <div class="max-w-5xl p-4 rounded-lg flex flex-col items-center shadow-lg bg-white">
    <div class="w-full relative max-w-md bg-black p-5 rounded-lg">
      <table class="table w-full h-full">
        <tr class="w-[192px]">
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(0)">
            {{ board[0] }}
          </td>
          <td
            class="border-x-2 text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300 border-neutral-400"
            @click="play(1)">{{ board[1] }}</td>
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(2)">
            {{ board[2] }}
          </td>
        </tr>
        <tr class="border-y-2 border-neutral-400 w-full">
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(3)">
            {{ board[3] }}
          </td>
          <td
            class="border-2 text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300 border-neutral-400"
            @click="play(4)">
            {{ board[4] }}
          </td>
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(5)">
            {{ board[5] }}
          </td>
        </tr>
        <tr class="w-full">
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(6)">
            {{ board[6] }}
          </td>
          <td
            class="border-x-2 text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300 border-neutral-400"
            @click="play(7)">{{ board[7] }}</td>
          <td
            class="text-white h-24 w-24  duration-300 transition cell text-center font-bold text-7xl cursor-pointer hover:text-neutral-300"
            @click="play(8)">
            {{ board[8] }}
          </td>
        </tr>
      </table>
      <!-- <div
        class="cell cursor-pointer w-1/3 p-6 text-center divide-x-2 divide-y-2 divide-neutral-400 flex items-center text-white text-7xl font-bold border-"
        v-for="(player, index) in board" :key="player" @click="play(index)">{{ player }}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: "X",
    }
  },
  methods: {
    play(index) {
      if (this.board[index]) {
        alert('Cell already occupied');
      } else {
        this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
        this.board[index] = this.currentPlayer;
      }

    }
  }

}
</script>

<style scoped>
.cell {
  line-height: 96px;
}
</style>