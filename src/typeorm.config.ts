import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database:
    __dirname + `/../db/${process.env.DB_FILENAME || 'nest-mechmarket-bot.db'}`,
  entities: [__dirname + '/**/*.entity.{js,ts}'],
  // Not recommended for production
  synchronize: process.env.TYPEORM_SYNC === 'true' || true
};

export default typeOrmConfig;
