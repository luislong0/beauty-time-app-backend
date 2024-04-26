import { Module } from '@nestjs/common'
import { envSchema } from './env/env'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
