---
title: Neural Fly — 无人机神经网络飞控
description: 基于元学习的无人机自适应飞行控制器，通过在线学习快速适应不同飞行条件与载荷变化。
date: 2025-09-01
tags: [uav, control, meta-learning, neural-network, ros2]
cover: /assets/spark/banner-2.jpg
links:
  repo: https://github.com/Zhangbt6/neural_fly_controler
featured: true
status: active
---

## 项目概述

Neural Fly 是一个基于**元学习**的无人机自适应飞行控制器，核心思路是让飞控在飞行过程中快速学习当前飞行条件（风扰、载荷变化、电机老化），并实时调整控制策略。

## 核心方法

- **元学习框架**：预训练一个能快速适应的基础控制策略
- **在线自适应**：飞行中通过少量数据更新适应当前条件
- **ROS2 集成**：与 PX4 飞控通过 XRCE-DDS 通信

## 技术栈

PyTorch · ROS2 · PX4 · Python · C++
