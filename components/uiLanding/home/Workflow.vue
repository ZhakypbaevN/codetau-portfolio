<template>
  <section class="landing-block workflow">
    <div class="landing-wrapper">
      <div class="workflow-inner">
        <div class="landing-notesBG">
          <div class="workflow-titles">
            <h2 class="workflow-titles-first landing-title">{{ $t('home.workflow.titleFirstPart') }}</h2><br>
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
            <div class="workflow-accordion-btn-icon">
              <SvgIcon
                class="header-control-lang"
                name="plus"
                :viewboxWidth="38"
                :viewboxHeight="38"
              />
            </div>
          </button>
          
          <Transition>
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
  const activeWorkflowIdx = ref(1);
</script>

<style lang="scss" scoped>
.workflow {
  padding-bottom: 0;
  margin-bottom: 10rem;

  &-titles {
    &-first {
      position: relative;
      left: -10%;

      margin-bottom: 2.2rem;
    }
    &-second {
      position: relative;
      right: -10%;

      color: var(--gray-color-op30);
      margin-bottom: 0;
    }
  }

  &-accordion {
    border-bottom: .1rem solid var(--gray-light-color);
    position: relative;

    &:last-of-type {
      border-bottom: none;
    }

    &.active .workflow-accordion {
      &-btn {
        padding-bottom: 1.8rem;

        &-titles-num,
        &-titles-title {
          color: var(--accent-color);
        }

        &-icon {
          background-color: var(--accent-color);
          border-color: var(--accent-color);

          & svg {
            fill: var(--white-color);
            transform: rotate(-45deg);
          }
        }
      }

      &-content {
        padding-top: 1.8rem;
      }
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
    
    &-btn {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

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

          transition: all .3s ease-in-out;
        }
      }

      &-icon {
        height: 5.4rem;
        width: 5.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        border: .2rem solid var(--gray-light-color);

        transition: all .3s ease-in-out;

        & svg {
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
}
</style>
