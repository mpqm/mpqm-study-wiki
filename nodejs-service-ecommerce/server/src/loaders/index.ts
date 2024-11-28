import expressLoader from './express';
import mongooseLoader from './mongoose';
import Logger from './logger';
import express, { Application } from 'express';

export default async ({ expressApp }: { expressApp: Application }) => {
  await mongooseLoader();
  Logger.info('MONGODB loaded and connected!');

  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
};
