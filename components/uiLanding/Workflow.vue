<template>
  <section class="landing-block workflow">
    <div class="landing-wrapper">
      <div class="workflow-inner">
        <div class="landing-notesBG">
          <Cursor class="workflow-titles-cursor first" />
          <Cursor class="workflow-titles-cursor second" />

          <Comment
            class="workflow-titles-comment first"
            :title="$t('comments.our_work_process')"
            theme="dark"
          />
          <Comment
            class="workflow-titles-comment second"
            :title="$t('comments.step_by_step_to_success')"
          />
          <Comment
            class="workflow-titles-comment third"
            :title="$t('comments.bringing_projects_to_life')"
            closed
          />

          <div class="workflow-titles">

            <SelectionText
              class="workflow-titles-first landing-title"
              :title="$t('home.workflow.titleFirstPart')"
            />

            <h2 class="workflow-titles-second landing-title">{{ $t('home.workflow.titleSecondPart') }}</h2>
          </div>
        </div>
        
        <div
          v-for="num in 6"
          :key="num"
          class="workflow-accordion"
          :class="{active: activeWorkflowIdx == num}"
        >
          <button
            class="workflow-accordion-btn"
            @click="() => activeWorkflowIdx = num"
          >
            <div class="workflow-accordion-btn-titles">
              <h1 class="workflow-accordion-btn-titles-num">0{{ num }}</h1>
              <h2 class="workflow-accordion-btn-titles-title">{{ $t(`home.workflow.processTitle_item${num}`) }}</h2>
            </div>
            <SvgIcon
              classMainName="workflow-accordion-btn-plus"
              className="workflow-accordion-btn-plus-icon"
              name="plus"
            />
          </button>
          
          <Transition name="workflow">
            <div v-if="activeWorkflowIdx == num" v-collapse>
              <p class="workflow-accordion-content">
                {{ $t(`home.workflow.processContent_item${num}`) }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const activeWorkflowIdx = ref(1);
</script>

<style lang="scss">
.workflow {
  &-titles {
    position: relative;

    &-first {
      position: relative;
      left: -10%;
      text-wrap: nowrap;

      margin-bottom: 2.2rem;
    }

    &-second {
      position: relative;
      right: -10%;

      color: var(--gray-color-op30);
      text-wrap: nowrap;
      margin-bottom: 0;
    }

    &-cursor {
      position: absolute;
      z-index: 5;

      &.first {
        top: 10rem;
        left: 70%;
        transform: translateX(-30%);
      }

      &.second {
        bottom: 10rem;
        left: 20%;
        transform: translateX(-80%);
      }
    }

    &-comment {
      position: absolute;
      z-index: 2;

      &.first {
        top: 44%;
        left: 0%;
        transform: translate(-36%, -98%);
      }

      &.second {
        top: 60%;
        left: 6%;
        transform: translate(-40%, -94%);
      }

      &.third {
        top: 50%;
        left: 85%;
        transform: translate(-50%, -15%);
      }
    }
  }

  &-accordion {
    border-bottom: .1rem solid var(--gray-light-color);
    position: relative;

    &:last-of-type {
      border-bottom: none;
    }

    &::after {
      content: '';

      display: block;
      height: 100%;
      width: 0.1rem;

      position: absolute;
      top: 0;
      left: 13.4rem;
      z-index: 2;

      background-color: var(--gray-light-color);
    }

    &:hover .workflow-accordion {
      &-btn {
        &-titles {
          &-num {
            color: var(--accent-color-op20);
          }

          &-title {
            color: var(--accent-color-op60);
          }
        }

        &-plus {
          border-color: var(--accent-color-op20);

          & svg {
            fill: var(--accent-color-op20);
          }
        }
      }
    }

    &.active .workflow-accordion {
      &-btn {
        padding-bottom: 1.8rem;

        &-titles-num,
        &-titles-title {
          color: var(--accent-color);
        }

        &-plus {
          border-color: var(--accent-color);

          & svg {
            fill: var(--accent-color);
            transform: rotate(-45deg);
          }
        }
      }

      &-content {
        padding-top: 1.8rem;
      }
    }
    
    &-btn {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      grid-gap: 1rem;

      padding: 3.4rem 0;
      transition: all .3s ease-in-out;

      &-titles {
        display: grid;
        align-items: center;
        grid-template-columns: 9.8rem 1fr;
        grid-gap: 8.4rem;

        &-num {
          color: var(--gray-color-op20);
          font-size: 5.2rem;
          font-weight: 700;
          text-align: left;

          transition: all .3s ease-in-out;
        }

        &-title {
          font-size: 2.8rem;
          font-weight: 600;
          text-align: left;
          line-height: 1.6;

          transition: all .3s ease-in-out;
        }
      }

      &-plus {
        height: 5.4rem;
        width: 5.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border: .2rem solid var(--gray-light-color);

        transition: all .3s ease-in-out;

        &-icon {
          height: 3.8rem;
          width: 3.8rem;
          fill: var(--gray-light-color);
          transform: rotate(0);

          transition: all .3s ease-in-out;
        }
      }
    }

    &-content {
      display: block;
      
      color: var(--gray-color-op70);
      padding: 0 27.0rem 3.8rem 18.2rem;

      transition: all .3s ease-in-out;
    }
  }


  // Adaptation
  @media (max-width: 1600px) {
    &-titles {
      &-first {
        left: -10%;
        margin-bottom: 2.2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-cursor {
        z-index: 5;

        &.first {
          top: 10rem;
          left: 70%;
          transform: translateX(-30%);
        }

        &.second {
          bottom: 10rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 68%;
          left: -1rem;
          transform: translateY(-32%)
        }

        &.second {
          top: 80%;
          left: 6%;
          transform: translate(-20%, -94%);
        }

        &.third {
          top: 50%;
          left: 80%;
          transform: translate(-50%, -20%);
        }
      }
    }
  }

  @media (max-width: 1400px) {
    &-titles {
      &-first {
        left: -10%;
        margin-bottom: 2.2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-cursor {
        z-index: 5;

        &.first {
          top: 10rem;
          left: 70%;
          transform: translateX(-30%);
        }

        &.second {
          bottom: 10rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 84%;
          left: -1rem;
          transform: translateY(-16%);
        }

        &.second {
          top: 96%;
          left: 8rem;
          transform: translateY(-4%);
        }

        &.third {
          top: 2%;
          left: 72%;
          transform: translate(-98%, -28%);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    &-titles {
      &-first {
        left: -10%;
        margin-bottom: 2.2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-cursor {
        z-index: 5;

        &.first {
          top: 10rem;
          left: 70%;
          transform: translateX(-30%);
        }

        &.second {
          bottom: 10rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: 74%;
          left: -3rem;
          transform: translateY(-26%);
        }

        &.second {
          top: 86%;
          left: 3%;
          transform: translate(-14%, -97%);
        }

        &.third {
          top: 50%;
          left: 82%;
          transform: translate(-50%, -18%);
        }
      }
    }

    &-accordion {
      &.active .workflow-accordion {
        &-btn {
          padding-bottom: 1.6rem;
        }

        &-content {
          padding-top: 1.6rem;
        }
      }

      &::after {
        left: 12.4rem;
      }
      
      &-btn {
        padding: 3rem 0;

        &-titles {
          grid-template-columns: 9.6rem 1fr;
          grid-gap: 7.4rem;

          &-num {
            font-size: 4.8rem;
          }

          &-title {
            font-size: 2.4rem;
          }
        }

        &-plus {
          height: 5.2rem;
          width: 5.2rem;

          border-width: .18rem;

          &-icon {
            height: 3.6rem;
            width: 3.6rem;
          }
        }
      }

      &-content {
        padding: 0 24rem 3.6rem 17.2rem;
      }
    }
  }

  @media (max-width: 992px) {
    &-titles {
      &-first {
        left: -10%;
        margin-bottom: 2.2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-cursor {
        z-index: 5;

        &.first {
          top: 10rem;
          left: 70%;
          transform: translateX(-30%);
        }

        &.second {
          bottom: 10rem;
          left: 20%;
          transform: translateX(-80%);
        }
      }

      &-comment {
        &.first {
          top: auto;
          left: 2rem;
          bottom: 3rem;
          transform: none;
        }

        &.second {
          top: auto;
          left: 8rem;
          bottom: -.4rem;
          transform: none;
        }

        &.third {
          top: 2%;
          left: 72%;
          transform: translate(-98%, -28%);
        }
      }
    }

    &-accordion {
      &.active .workflow-accordion {
        &-btn {
          padding-bottom: 1.4rem;
        }

        &-content {
          padding-top: 1.4rem;
        }
      }

      &::after {
        left: 10.8rem;
      }
      
      &-btn {
        padding: 2.4rem 0;

        &-titles {
          grid-template-columns: 9.4rem 1fr;
          grid-gap: 5.2rem;

          &-num {
            font-size: 4rem;
          }

          &-title {
            font-size: 2rem;
          }
        }

        &-plus {
          min-width: 4.2rem;
          height: 4.2rem;
          width: 4.2rem;

          border-width: .16rem;

          &-icon {
            height: 3.2rem;
            width: 3.2rem;
          }
        }
      }

      &-content {
        padding: 0 12rem 3rem 15rem;
      }
    }
  }

  @media (max-width: 768px) {
    &-titles {
      &-first {
        left: -10%;
        margin-bottom: 2.2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-cursor {
        z-index: 5;

        &.first {
          top: 10rem;
          left: 90%;
          transform: translateX(-10%);
        }

        &.second {
          bottom: 10rem;
          left: 10%;
          transform: translateX(-90%);
        }
      }

      &-comment {
        &.first {
          top: auto;
          left: 2rem;
          bottom: 1rem;
          transform: none;
        }

        &.second {
          top: auto;
          left: 14rem;
          bottom: -1rem;
          transform: none;
        }

        &.third {
          top: 2%;
          left: 62%;
          transform: translate(-98%, -38%);
        }
      }
    }

    &-accordion {
      &.active .workflow-accordion {
        &-btn {
          padding-bottom: 1.2rem;
        }

        &-content {
          padding-top: 1.2rem;
        }
      }

      &::after {
        left: 7.8rem;
      }
      
      &-btn {
        padding: 2.2rem 0;

        &-titles {
          grid-template-columns: 7.2rem 1fr;
          grid-gap: 3.2rem;

          &-num {
            font-size: 3.2rem;
          }

          &-title {
            font-size: 1.8rem;
          }
        }

        &-plus {
          min-width: 3.2rem;
          height: 3.2rem;
          width: 3.2rem;

          border-width: .16rem;

          &-icon {
            height: 2.4rem;
            width: 2.4rem;
          }
        }
      }

      &-content {
        padding: 0 4rem 1.8rem 10.6rem;
      }
    }
  }

  @media (max-width: 576px) {
    &-titles {
      &-first {
        left: -4%;
        margin-bottom: 2rem;
      }

      &-second {
        right: -10%;
        margin-bottom: 0;
      }

      &-comment {
        &.first {
          top: -3rem;
          left: 2rem;
          bottom: auto;
          transform: none;
        }

        &.second {
          top: -1rem;
          left: 14rem;
          bottom: auto;
          transform: none;
        }

        &.third {
          top: auto;
          left: 60%;
          bottom: 1rem;
          transform: translateX(-40%);
        }
      }
    }

    &-accordion {
      &.active .workflow-accordion {
        &-btn {
          padding-bottom: 1.2rem;
        }

        &-content {
          padding-top: 1.2rem;
        }
      }

      &::after {
        left: 6rem;
      }
      
      &-btn {
        padding: 2.2rem 0;

        &-titles {
          grid-template-columns: 4.8rem 1fr;
          grid-gap: 3rem;

          &-num {
            font-size: 2.4rem;
          }

          &-title {
            font-size: 1.6rem;
          }
        }

        &-plus {
          min-width: 2.4rem;
          height: 2.4rem;
          width: 2.4rem;

          border-width: .16rem;

          &-icon {
            height: 2rem;
            width: 2rem;
          }
        }
      }

      &-content {
        padding: 0 2rem 1.4rem 8rem;
      }
    }
  }

  @media (max-width: 380px) {
    &-titles {
      &-first {
        left: -2%;
        margin-bottom: 2rem;
      }

      &-second {
        right: -8%;
        margin-bottom: 0;
      }

      &-comment {
        &.third {
          top: auto;
          left: 20%;
          bottom: 1rem;
          transform: translateX(-80%);
        }
      }
    }

    &-accordion {
      &.active .workflow-accordion {
        &-btn {
          padding-bottom: 1.2rem;
        }

        &-content {
          padding-top: 1.2rem;
        }
      }

      &::after {
        left: 5.4rem;
      }
      
      &-btn {
        padding: 2.2rem 0;

        &-titles {
          grid-template-columns: 4.8rem 1fr;
          grid-gap: 2.4rem;

          &-num {
            font-size: 2.4rem;
          }

          &-title {
            font-size: 1.6rem;
          }
        }

        &-plus {
          display: none;
        }
      }

      &-content {
        padding: 0 2rem 1.4rem 8rem;
      }
    }
  }
}
</style>
