<template>
  <section class="landing-block developmentPlan">
    <div class="landing-wrapper">
      <h2 class="developmentPlan-titles-first landing-title center">{{ $t('developmentPlan.title') }}</h2><br>
      
      <div class="developmentPlan-diagram">
        <div
          v-for="(diagramRow, idx) of planList"
          :key="idx"
          class="developmentPlan-diagram-row"
          :style="{
            left: `${(diagramRow.left * 100) / planColumns}%`,
            width: `${(diagramRow.width * 100) / planColumns}%`,
          }"
        >
          <div
            v-for="work of diagramRow.works"
            :key="work.title"
            class="developmentPlan-diagram-work"
            :style="{width: work.width ? `${(work.width * 1000) / planColumns}%` : '100%',}"
          >
            <div
              class="developmentPlan-diagram-work-main"
              :style="{
                backgroundColor: editColor(work.color, -75),
                '--before-background': work.color
              }"
            >
              <span :style="`color: ${work.color}`">
                {{ work.title }}
              </span>
            </div>

            <div v-if="work.events.length" class="developmentPlan-diagram-work-events">
              <h6
                v-for="event of work.events"
                :key="event"
                class="developmentPlan-diagram-work-event"
              >
                {{ event }}
              </h6>
            </div>
          </div>
        </div>


        <div class="developmentPlan-diagram-bg">
          <div
            class="developmentPlan-diagram-bg-column"
            :style="{left: '0%'}"
          ></div>
          <div
            v-for="column in planColumns"
            :key="column"
            class="developmentPlan-diagram-bg-column"
            :style="{ left: `${(column * 100) / planColumns}%` }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { editColor } from '@/helpers/colorHelpers';
  import type { IPlanItem } from '@/types/developmentPlan';

  const { t } = useI18n()

  const planColumns: number = 15;
  const planList: IPlanItem[] = [
    {
      left: 0,
      width: 9,
      works: [
        {
          title: 'Составление ТЗ',
          color: '#F29637',
          width: 3,
          events: []
        },
        {
          title: 'Дизайн',
          color: '#9D58FF',
          width: 6,
          events: [
            'Разбор дизайна',
            'Утверждение дизайна'
          ]
        },
      ]
    },
    {
      left: 5,
      width: 6,
      works: [
        {
          title: 'Разработка',
          color: '#0EA5EC',
          events: []
        },
      ]
    },
    {
      left: 6,
      width: 7,
      works: [
        {
          title: 'Тестирование',
          color: '#6554FF',
          events: []
        },
      ]
    },
    {
      left: 11,
      width: 4,
      works: [
        {
          title: 'Запуск и поддержка',
          color: '#2CAA5A',
          events: []
        },
      ]
    }
  ];
</script>

<style lang="scss" scoped>
.developmentPlan {
  padding-top: 12rem;
  
  &-diagram {
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    
    position: relative;
    z-index: 1;
    padding: 2.6rem 0 3.4rem;

    &-row {
      display: flex;
      position: relative;
    }

    &-work {
      width: 20%;
      display: flex;
      flex-direction: column;
      grid-gap: .6rem;
      padding-right: 1rem;

      &-main {
        display: flex;
        align-items: center;
        grid-gap: 0.5em;

        color: #F29637;
        font-size: 2rem;
        font-weight: 600;
        font-family: var(--secondary-font);
        
        padding: .82em 1.25em;
        position: relative;

        border-radius: .3em;

        &::before {
          content: '';

          display: block;
          height: calc(100% - 1em);
          width: 0.3em;

          position: absolute;
          top: 50%;
          left: .55em;
          z-index: 2;
          transform: translateY(-50%);

          border-radius: .7em;
          background-color: var(--before-background);
        }
      }

      &-events {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        grid-gap: .8rem;

        padding-bottom: 1.4rem;
      }

      &-event {
        display: block;
        padding: .25em .5em;
        padding-right: 3em;

        color: var(--gray-color-op70);
        font-size: 1.6rem;
        font-family: var(--secondary-font);

        border-radius: .3em;
        background-color: var(--gray-dark-color);
      }
    }

    &-bg {
      height: 100%;
      width: 100%;
      
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      &-column {
        height: 100%;
        width: 1px;

        position: absolute;
        top: 0;
        z-index: 1;
        
        background-repeat: repeat-y;
        background-position: center;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDIgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjA0MDA0IDAuMDAwMjQ0MTQxQzAuOTk2Mzk5IDExLjk4OTMgMS4wMzE4NyAyLjI0NDU3IDEuMDMwNTUgMi42MDY1NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiLz4KPC9zdmc+Cg==')
      }
    }
  }
}
</style>
