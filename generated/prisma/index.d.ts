
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model StudyRecord
 * 
 */
export type StudyRecord = $Result.DefaultSelection<Prisma.$StudyRecordPayload>
/**
 * Model PendingActivity
 * 
 */
export type PendingActivity = $Result.DefaultSelection<Prisma.$PendingActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyRecord`: Exposes CRUD operations for the **StudyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyRecords
    * const studyRecords = await prisma.studyRecord.findMany()
    * ```
    */
  get studyRecord(): Prisma.StudyRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendingActivity`: Exposes CRUD operations for the **PendingActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingActivities
    * const pendingActivities = await prisma.pendingActivity.findMany()
    * ```
    */
  get pendingActivity(): Prisma.PendingActivityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subject: 'Subject',
    StudyRecord: 'StudyRecord',
    PendingActivity: 'PendingActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subject" | "studyRecord" | "pendingActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      StudyRecord: {
        payload: Prisma.$StudyRecordPayload<ExtArgs>
        fields: Prisma.StudyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          findFirst: {
            args: Prisma.StudyRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          findMany: {
            args: Prisma.StudyRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          create: {
            args: Prisma.StudyRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          createMany: {
            args: Prisma.StudyRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          delete: {
            args: Prisma.StudyRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          update: {
            args: Prisma.StudyRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudyRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          upsert: {
            args: Prisma.StudyRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          aggregate: {
            args: Prisma.StudyRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyRecord>
          }
          groupBy: {
            args: Prisma.StudyRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudyRecordCountAggregateOutputType> | number
          }
        }
      }
      PendingActivity: {
        payload: Prisma.$PendingActivityPayload<ExtArgs>
        fields: Prisma.PendingActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          findFirst: {
            args: Prisma.PendingActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          findMany: {
            args: Prisma.PendingActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>[]
          }
          create: {
            args: Prisma.PendingActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          createMany: {
            args: Prisma.PendingActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>[]
          }
          delete: {
            args: Prisma.PendingActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          update: {
            args: Prisma.PendingActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          deleteMany: {
            args: Prisma.PendingActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendingActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>[]
          }
          upsert: {
            args: Prisma.PendingActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingActivityPayload>
          }
          aggregate: {
            args: Prisma.PendingActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingActivity>
          }
          groupBy: {
            args: Prisma.PendingActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingActivityCountArgs<ExtArgs>
            result: $Utils.Optional<PendingActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subject?: SubjectOmit
    studyRecord?: StudyRecordOmit
    pendingActivity?: PendingActivityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subjects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | UserCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    studyRecord: number
    pendingActivities: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyRecord?: boolean | SubjectCountOutputTypeCountStudyRecordArgs
    pendingActivities?: boolean | SubjectCountOutputTypeCountPendingActivitiesArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudyRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyRecordWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountPendingActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cellphoneNumber: string | null
    password: string | null
    receiveNotify: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    cellphoneNumber: string | null
    password: string | null
    receiveNotify: boolean | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cellphoneNumber: number
    password: number
    receiveNotify: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cellphoneNumber?: true
    password?: true
    receiveNotify?: true
    updated_at?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cellphoneNumber?: true
    password?: true
    receiveNotify?: true
    updated_at?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cellphoneNumber?: true
    password?: true
    receiveNotify?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at: Date
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cellphoneNumber?: boolean
    password?: boolean
    receiveNotify?: boolean
    updated_at?: boolean
    created_at?: boolean
    subjects?: boolean | User$subjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cellphoneNumber?: boolean
    password?: boolean
    receiveNotify?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cellphoneNumber?: boolean
    password?: boolean
    receiveNotify?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cellphoneNumber?: boolean
    password?: boolean
    receiveNotify?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "cellphoneNumber" | "password" | "receiveNotify" | "updated_at" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | User$subjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      cellphoneNumber: string
      password: string
      receiveNotify: boolean
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends User$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly cellphoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly receiveNotify: FieldRef<"User", 'Boolean'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subjects
   */
  export type User$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    priority: number | null
  }

  export type SubjectSumAggregateOutputType = {
    priority: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    id_user: string | null
    title: string | null
    priority: number | null
    description: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    id_user: string | null
    title: string | null
    priority: number | null
    description: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    id_user: number
    title: number
    priority: number
    description: number
    week_day: number
    updated_at: number
    created_at: number
    pendingSubjects: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    priority?: true
  }

  export type SubjectSumAggregateInputType = {
    priority?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    id_user?: true
    title?: true
    priority?: true
    description?: true
    updated_at?: true
    created_at?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    id_user?: true
    title?: true
    priority?: true
    description?: true
    updated_at?: true
    created_at?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    id_user?: true
    title?: true
    priority?: true
    description?: true
    week_day?: true
    updated_at?: true
    created_at?: true
    pendingSubjects?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    id_user: string
    title: string
    priority: number
    description: string
    week_day: string[]
    updated_at: Date
    created_at: Date
    pendingSubjects: string[]
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    title?: boolean
    priority?: boolean
    description?: boolean
    week_day?: boolean
    updated_at?: boolean
    created_at?: boolean
    pendingSubjects?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyRecord?: boolean | Subject$studyRecordArgs<ExtArgs>
    pendingActivities?: boolean | Subject$pendingActivitiesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    title?: boolean
    priority?: boolean
    description?: boolean
    week_day?: boolean
    updated_at?: boolean
    created_at?: boolean
    pendingSubjects?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    title?: boolean
    priority?: boolean
    description?: boolean
    week_day?: boolean
    updated_at?: boolean
    created_at?: boolean
    pendingSubjects?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    id_user?: boolean
    title?: boolean
    priority?: boolean
    description?: boolean
    week_day?: boolean
    updated_at?: boolean
    created_at?: boolean
    pendingSubjects?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "title" | "priority" | "description" | "week_day" | "updated_at" | "created_at" | "pendingSubjects", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    studyRecord?: boolean | Subject$studyRecordArgs<ExtArgs>
    pendingActivities?: boolean | Subject$pendingActivitiesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      studyRecord: Prisma.$StudyRecordPayload<ExtArgs>[]
      pendingActivities: Prisma.$PendingActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_user: string
      title: string
      priority: number
      description: string
      week_day: string[]
      updated_at: Date
      created_at: Date
      pendingSubjects: string[]
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studyRecord<T extends Subject$studyRecordArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studyRecordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pendingActivities<T extends Subject$pendingActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Subject$pendingActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly id_user: FieldRef<"Subject", 'String'>
    readonly title: FieldRef<"Subject", 'String'>
    readonly priority: FieldRef<"Subject", 'Int'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly week_day: FieldRef<"Subject", 'String[]'>
    readonly updated_at: FieldRef<"Subject", 'DateTime'>
    readonly created_at: FieldRef<"Subject", 'DateTime'>
    readonly pendingSubjects: FieldRef<"Subject", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.studyRecord
   */
  export type Subject$studyRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    where?: StudyRecordWhereInput
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    cursor?: StudyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * Subject.pendingActivities
   */
  export type Subject$pendingActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    where?: PendingActivityWhereInput
    orderBy?: PendingActivityOrderByWithRelationInput | PendingActivityOrderByWithRelationInput[]
    cursor?: PendingActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingActivityScalarFieldEnum | PendingActivityScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model StudyRecord
   */

  export type AggregateStudyRecord = {
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  export type StudyRecordAvgAggregateOutputType = {
    minutesStudied: number | null
  }

  export type StudyRecordSumAggregateOutputType = {
    minutesStudied: number | null
  }

  export type StudyRecordMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    dayOfWeek: string | null
    minutesStudied: number | null
    created_at: Date | null
  }

  export type StudyRecordMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    dayOfWeek: string | null
    minutesStudied: number | null
    created_at: Date | null
  }

  export type StudyRecordCountAggregateOutputType = {
    id: number
    subjectId: number
    dayOfWeek: number
    minutesStudied: number
    created_at: number
    _all: number
  }


  export type StudyRecordAvgAggregateInputType = {
    minutesStudied?: true
  }

  export type StudyRecordSumAggregateInputType = {
    minutesStudied?: true
  }

  export type StudyRecordMinAggregateInputType = {
    id?: true
    subjectId?: true
    dayOfWeek?: true
    minutesStudied?: true
    created_at?: true
  }

  export type StudyRecordMaxAggregateInputType = {
    id?: true
    subjectId?: true
    dayOfWeek?: true
    minutesStudied?: true
    created_at?: true
  }

  export type StudyRecordCountAggregateInputType = {
    id?: true
    subjectId?: true
    dayOfWeek?: true
    minutesStudied?: true
    created_at?: true
    _all?: true
  }

  export type StudyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyRecord to aggregate.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyRecords
    **/
    _count?: true | StudyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyRecordMaxAggregateInputType
  }

  export type GetStudyRecordAggregateType<T extends StudyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyRecord[P]>
      : GetScalarType<T[P], AggregateStudyRecord[P]>
  }




  export type StudyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyRecordWhereInput
    orderBy?: StudyRecordOrderByWithAggregationInput | StudyRecordOrderByWithAggregationInput[]
    by: StudyRecordScalarFieldEnum[] | StudyRecordScalarFieldEnum
    having?: StudyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyRecordCountAggregateInputType | true
    _avg?: StudyRecordAvgAggregateInputType
    _sum?: StudyRecordSumAggregateInputType
    _min?: StudyRecordMinAggregateInputType
    _max?: StudyRecordMaxAggregateInputType
  }

  export type StudyRecordGroupByOutputType = {
    id: string
    subjectId: string
    dayOfWeek: string
    minutesStudied: number
    created_at: Date
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  type GetStudyRecordGroupByPayload<T extends StudyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    dayOfWeek?: boolean
    minutesStudied?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    dayOfWeek?: boolean
    minutesStudied?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    dayOfWeek?: boolean
    minutesStudied?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectScalar = {
    id?: boolean
    subjectId?: boolean
    dayOfWeek?: boolean
    minutesStudied?: boolean
    created_at?: boolean
  }

  export type StudyRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "dayOfWeek" | "minutesStudied" | "created_at", ExtArgs["result"]["studyRecord"]>
  export type StudyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudyRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudyRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyRecord"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      dayOfWeek: string
      minutesStudied: number
      created_at: Date
    }, ExtArgs["result"]["studyRecord"]>
    composites: {}
  }

  type StudyRecordGetPayload<S extends boolean | null | undefined | StudyRecordDefaultArgs> = $Result.GetResult<Prisma.$StudyRecordPayload, S>

  type StudyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyRecordCountAggregateInputType | true
    }

  export interface StudyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyRecord'], meta: { name: 'StudyRecord' } }
    /**
     * Find zero or one StudyRecord that matches the filter.
     * @param {StudyRecordFindUniqueArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyRecordFindUniqueArgs>(args: SelectSubset<T, StudyRecordFindUniqueArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyRecordFindUniqueOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindFirstArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyRecordFindFirstArgs>(args?: SelectSubset<T, StudyRecordFindFirstArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindFirstOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany()
     * 
     * // Get first 10 StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyRecordFindManyArgs>(args?: SelectSubset<T, StudyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyRecord.
     * @param {StudyRecordCreateArgs} args - Arguments to create a StudyRecord.
     * @example
     * // Create one StudyRecord
     * const StudyRecord = await prisma.studyRecord.create({
     *   data: {
     *     // ... data to create a StudyRecord
     *   }
     * })
     * 
     */
    create<T extends StudyRecordCreateArgs>(args: SelectSubset<T, StudyRecordCreateArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyRecords.
     * @param {StudyRecordCreateManyArgs} args - Arguments to create many StudyRecords.
     * @example
     * // Create many StudyRecords
     * const studyRecord = await prisma.studyRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyRecordCreateManyArgs>(args?: SelectSubset<T, StudyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyRecords and returns the data saved in the database.
     * @param {StudyRecordCreateManyAndReturnArgs} args - Arguments to create many StudyRecords.
     * @example
     * // Create many StudyRecords
     * const studyRecord = await prisma.studyRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyRecords and only return the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyRecord.
     * @param {StudyRecordDeleteArgs} args - Arguments to delete one StudyRecord.
     * @example
     * // Delete one StudyRecord
     * const StudyRecord = await prisma.studyRecord.delete({
     *   where: {
     *     // ... filter to delete one StudyRecord
     *   }
     * })
     * 
     */
    delete<T extends StudyRecordDeleteArgs>(args: SelectSubset<T, StudyRecordDeleteArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyRecord.
     * @param {StudyRecordUpdateArgs} args - Arguments to update one StudyRecord.
     * @example
     * // Update one StudyRecord
     * const studyRecord = await prisma.studyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyRecordUpdateArgs>(args: SelectSubset<T, StudyRecordUpdateArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyRecords.
     * @param {StudyRecordDeleteManyArgs} args - Arguments to filter StudyRecords to delete.
     * @example
     * // Delete a few StudyRecords
     * const { count } = await prisma.studyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyRecordDeleteManyArgs>(args?: SelectSubset<T, StudyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyRecords
     * const studyRecord = await prisma.studyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyRecordUpdateManyArgs>(args: SelectSubset<T, StudyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyRecords and returns the data updated in the database.
     * @param {StudyRecordUpdateManyAndReturnArgs} args - Arguments to update many StudyRecords.
     * @example
     * // Update many StudyRecords
     * const studyRecord = await prisma.studyRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyRecords and only return the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyRecord.
     * @param {StudyRecordUpsertArgs} args - Arguments to update or create a StudyRecord.
     * @example
     * // Update or create a StudyRecord
     * const studyRecord = await prisma.studyRecord.upsert({
     *   create: {
     *     // ... data to create a StudyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudyRecordUpsertArgs>(args: SelectSubset<T, StudyRecordUpsertArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordCountArgs} args - Arguments to filter StudyRecords to count.
     * @example
     * // Count the number of StudyRecords
     * const count = await prisma.studyRecord.count({
     *   where: {
     *     // ... the filter for the StudyRecords we want to count
     *   }
     * })
    **/
    count<T extends StudyRecordCountArgs>(
      args?: Subset<T, StudyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyRecordAggregateArgs>(args: Subset<T, StudyRecordAggregateArgs>): Prisma.PrismaPromise<GetStudyRecordAggregateType<T>>

    /**
     * Group by StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudyRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyRecord model
   */
  readonly fields: StudyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyRecord model
   */
  interface StudyRecordFieldRefs {
    readonly id: FieldRef<"StudyRecord", 'String'>
    readonly subjectId: FieldRef<"StudyRecord", 'String'>
    readonly dayOfWeek: FieldRef<"StudyRecord", 'String'>
    readonly minutesStudied: FieldRef<"StudyRecord", 'Int'>
    readonly created_at: FieldRef<"StudyRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyRecord findUnique
   */
  export type StudyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord findUniqueOrThrow
   */
  export type StudyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord findFirst
   */
  export type StudyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyRecords.
     */
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord findFirstOrThrow
   */
  export type StudyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyRecords.
     */
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord findMany
   */
  export type StudyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecords to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord create
   */
  export type StudyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyRecord.
     */
    data: XOR<StudyRecordCreateInput, StudyRecordUncheckedCreateInput>
  }

  /**
   * StudyRecord createMany
   */
  export type StudyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyRecords.
     */
    data: StudyRecordCreateManyInput | StudyRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyRecord createManyAndReturn
   */
  export type StudyRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StudyRecords.
     */
    data: StudyRecordCreateManyInput | StudyRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyRecord update
   */
  export type StudyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyRecord.
     */
    data: XOR<StudyRecordUpdateInput, StudyRecordUncheckedUpdateInput>
    /**
     * Choose, which StudyRecord to update.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord updateMany
   */
  export type StudyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyRecords.
     */
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudyRecords to update
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to update.
     */
    limit?: number
  }

  /**
   * StudyRecord updateManyAndReturn
   */
  export type StudyRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * The data used to update StudyRecords.
     */
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudyRecords to update
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyRecord upsert
   */
  export type StudyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyRecord to update in case it exists.
     */
    where: StudyRecordWhereUniqueInput
    /**
     * In case the StudyRecord found by the `where` argument doesn't exist, create a new StudyRecord with this data.
     */
    create: XOR<StudyRecordCreateInput, StudyRecordUncheckedCreateInput>
    /**
     * In case the StudyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyRecordUpdateInput, StudyRecordUncheckedUpdateInput>
  }

  /**
   * StudyRecord delete
   */
  export type StudyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter which StudyRecord to delete.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord deleteMany
   */
  export type StudyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyRecords to delete
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to delete.
     */
    limit?: number
  }

  /**
   * StudyRecord without action
   */
  export type StudyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
  }


  /**
   * Model PendingActivity
   */

  export type AggregatePendingActivity = {
    _count: PendingActivityCountAggregateOutputType | null
    _avg: PendingActivityAvgAggregateOutputType | null
    _sum: PendingActivitySumAggregateOutputType | null
    _min: PendingActivityMinAggregateOutputType | null
    _max: PendingActivityMaxAggregateOutputType | null
  }

  export type PendingActivityAvgAggregateOutputType = {
    percentageConclud: number | null
  }

  export type PendingActivitySumAggregateOutputType = {
    percentageConclud: number | null
  }

  export type PendingActivityMinAggregateOutputType = {
    id: string | null
    subjectId: string | null
    name: string | null
    description: string | null
    percentageConclud: number | null
    created_at: Date | null
  }

  export type PendingActivityMaxAggregateOutputType = {
    id: string | null
    subjectId: string | null
    name: string | null
    description: string | null
    percentageConclud: number | null
    created_at: Date | null
  }

  export type PendingActivityCountAggregateOutputType = {
    id: number
    subjectId: number
    name: number
    description: number
    percentageConclud: number
    created_at: number
    _all: number
  }


  export type PendingActivityAvgAggregateInputType = {
    percentageConclud?: true
  }

  export type PendingActivitySumAggregateInputType = {
    percentageConclud?: true
  }

  export type PendingActivityMinAggregateInputType = {
    id?: true
    subjectId?: true
    name?: true
    description?: true
    percentageConclud?: true
    created_at?: true
  }

  export type PendingActivityMaxAggregateInputType = {
    id?: true
    subjectId?: true
    name?: true
    description?: true
    percentageConclud?: true
    created_at?: true
  }

  export type PendingActivityCountAggregateInputType = {
    id?: true
    subjectId?: true
    name?: true
    description?: true
    percentageConclud?: true
    created_at?: true
    _all?: true
  }

  export type PendingActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingActivity to aggregate.
     */
    where?: PendingActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingActivities to fetch.
     */
    orderBy?: PendingActivityOrderByWithRelationInput | PendingActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingActivities
    **/
    _count?: true | PendingActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingActivityMaxAggregateInputType
  }

  export type GetPendingActivityAggregateType<T extends PendingActivityAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingActivity[P]>
      : GetScalarType<T[P], AggregatePendingActivity[P]>
  }




  export type PendingActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingActivityWhereInput
    orderBy?: PendingActivityOrderByWithAggregationInput | PendingActivityOrderByWithAggregationInput[]
    by: PendingActivityScalarFieldEnum[] | PendingActivityScalarFieldEnum
    having?: PendingActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingActivityCountAggregateInputType | true
    _avg?: PendingActivityAvgAggregateInputType
    _sum?: PendingActivitySumAggregateInputType
    _min?: PendingActivityMinAggregateInputType
    _max?: PendingActivityMaxAggregateInputType
  }

  export type PendingActivityGroupByOutputType = {
    id: string
    subjectId: string
    name: string
    description: string
    percentageConclud: number
    created_at: Date
    _count: PendingActivityCountAggregateOutputType | null
    _avg: PendingActivityAvgAggregateOutputType | null
    _sum: PendingActivitySumAggregateOutputType | null
    _min: PendingActivityMinAggregateOutputType | null
    _max: PendingActivityMaxAggregateOutputType | null
  }

  type GetPendingActivityGroupByPayload<T extends PendingActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingActivityGroupByOutputType[P]>
            : GetScalarType<T[P], PendingActivityGroupByOutputType[P]>
        }
      >
    >


  export type PendingActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    name?: boolean
    description?: boolean
    percentageConclud?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingActivity"]>

  export type PendingActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    name?: boolean
    description?: boolean
    percentageConclud?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingActivity"]>

  export type PendingActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectId?: boolean
    name?: boolean
    description?: boolean
    percentageConclud?: boolean
    created_at?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingActivity"]>

  export type PendingActivitySelectScalar = {
    id?: boolean
    subjectId?: boolean
    name?: boolean
    description?: boolean
    percentageConclud?: boolean
    created_at?: boolean
  }

  export type PendingActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectId" | "name" | "description" | "percentageConclud" | "created_at", ExtArgs["result"]["pendingActivity"]>
  export type PendingActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type PendingActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type PendingActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $PendingActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingActivity"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subjectId: string
      name: string
      description: string
      percentageConclud: number
      created_at: Date
    }, ExtArgs["result"]["pendingActivity"]>
    composites: {}
  }

  type PendingActivityGetPayload<S extends boolean | null | undefined | PendingActivityDefaultArgs> = $Result.GetResult<Prisma.$PendingActivityPayload, S>

  type PendingActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendingActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendingActivityCountAggregateInputType | true
    }

  export interface PendingActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingActivity'], meta: { name: 'PendingActivity' } }
    /**
     * Find zero or one PendingActivity that matches the filter.
     * @param {PendingActivityFindUniqueArgs} args - Arguments to find a PendingActivity
     * @example
     * // Get one PendingActivity
     * const pendingActivity = await prisma.pendingActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingActivityFindUniqueArgs>(args: SelectSubset<T, PendingActivityFindUniqueArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PendingActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendingActivityFindUniqueOrThrowArgs} args - Arguments to find a PendingActivity
     * @example
     * // Get one PendingActivity
     * const pendingActivity = await prisma.pendingActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityFindFirstArgs} args - Arguments to find a PendingActivity
     * @example
     * // Get one PendingActivity
     * const pendingActivity = await prisma.pendingActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingActivityFindFirstArgs>(args?: SelectSubset<T, PendingActivityFindFirstArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PendingActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityFindFirstOrThrowArgs} args - Arguments to find a PendingActivity
     * @example
     * // Get one PendingActivity
     * const pendingActivity = await prisma.pendingActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PendingActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingActivities
     * const pendingActivities = await prisma.pendingActivity.findMany()
     * 
     * // Get first 10 PendingActivities
     * const pendingActivities = await prisma.pendingActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingActivityWithIdOnly = await prisma.pendingActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingActivityFindManyArgs>(args?: SelectSubset<T, PendingActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PendingActivity.
     * @param {PendingActivityCreateArgs} args - Arguments to create a PendingActivity.
     * @example
     * // Create one PendingActivity
     * const PendingActivity = await prisma.pendingActivity.create({
     *   data: {
     *     // ... data to create a PendingActivity
     *   }
     * })
     * 
     */
    create<T extends PendingActivityCreateArgs>(args: SelectSubset<T, PendingActivityCreateArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PendingActivities.
     * @param {PendingActivityCreateManyArgs} args - Arguments to create many PendingActivities.
     * @example
     * // Create many PendingActivities
     * const pendingActivity = await prisma.pendingActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingActivityCreateManyArgs>(args?: SelectSubset<T, PendingActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingActivities and returns the data saved in the database.
     * @param {PendingActivityCreateManyAndReturnArgs} args - Arguments to create many PendingActivities.
     * @example
     * // Create many PendingActivities
     * const pendingActivity = await prisma.pendingActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingActivities and only return the `id`
     * const pendingActivityWithIdOnly = await prisma.pendingActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PendingActivity.
     * @param {PendingActivityDeleteArgs} args - Arguments to delete one PendingActivity.
     * @example
     * // Delete one PendingActivity
     * const PendingActivity = await prisma.pendingActivity.delete({
     *   where: {
     *     // ... filter to delete one PendingActivity
     *   }
     * })
     * 
     */
    delete<T extends PendingActivityDeleteArgs>(args: SelectSubset<T, PendingActivityDeleteArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PendingActivity.
     * @param {PendingActivityUpdateArgs} args - Arguments to update one PendingActivity.
     * @example
     * // Update one PendingActivity
     * const pendingActivity = await prisma.pendingActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingActivityUpdateArgs>(args: SelectSubset<T, PendingActivityUpdateArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PendingActivities.
     * @param {PendingActivityDeleteManyArgs} args - Arguments to filter PendingActivities to delete.
     * @example
     * // Delete a few PendingActivities
     * const { count } = await prisma.pendingActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingActivityDeleteManyArgs>(args?: SelectSubset<T, PendingActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingActivities
     * const pendingActivity = await prisma.pendingActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingActivityUpdateManyArgs>(args: SelectSubset<T, PendingActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingActivities and returns the data updated in the database.
     * @param {PendingActivityUpdateManyAndReturnArgs} args - Arguments to update many PendingActivities.
     * @example
     * // Update many PendingActivities
     * const pendingActivity = await prisma.pendingActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PendingActivities and only return the `id`
     * const pendingActivityWithIdOnly = await prisma.pendingActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendingActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, PendingActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PendingActivity.
     * @param {PendingActivityUpsertArgs} args - Arguments to update or create a PendingActivity.
     * @example
     * // Update or create a PendingActivity
     * const pendingActivity = await prisma.pendingActivity.upsert({
     *   create: {
     *     // ... data to create a PendingActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingActivity we want to update
     *   }
     * })
     */
    upsert<T extends PendingActivityUpsertArgs>(args: SelectSubset<T, PendingActivityUpsertArgs<ExtArgs>>): Prisma__PendingActivityClient<$Result.GetResult<Prisma.$PendingActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PendingActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityCountArgs} args - Arguments to filter PendingActivities to count.
     * @example
     * // Count the number of PendingActivities
     * const count = await prisma.pendingActivity.count({
     *   where: {
     *     // ... the filter for the PendingActivities we want to count
     *   }
     * })
    **/
    count<T extends PendingActivityCountArgs>(
      args?: Subset<T, PendingActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PendingActivityAggregateArgs>(args: Subset<T, PendingActivityAggregateArgs>): Prisma.PrismaPromise<GetPendingActivityAggregateType<T>>

    /**
     * Group by PendingActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PendingActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingActivityGroupByArgs['orderBy'] }
        : { orderBy?: PendingActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendingActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingActivity model
   */
  readonly fields: PendingActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PendingActivity model
   */
  interface PendingActivityFieldRefs {
    readonly id: FieldRef<"PendingActivity", 'String'>
    readonly subjectId: FieldRef<"PendingActivity", 'String'>
    readonly name: FieldRef<"PendingActivity", 'String'>
    readonly description: FieldRef<"PendingActivity", 'String'>
    readonly percentageConclud: FieldRef<"PendingActivity", 'Int'>
    readonly created_at: FieldRef<"PendingActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingActivity findUnique
   */
  export type PendingActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter, which PendingActivity to fetch.
     */
    where: PendingActivityWhereUniqueInput
  }

  /**
   * PendingActivity findUniqueOrThrow
   */
  export type PendingActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter, which PendingActivity to fetch.
     */
    where: PendingActivityWhereUniqueInput
  }

  /**
   * PendingActivity findFirst
   */
  export type PendingActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter, which PendingActivity to fetch.
     */
    where?: PendingActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingActivities to fetch.
     */
    orderBy?: PendingActivityOrderByWithRelationInput | PendingActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingActivities.
     */
    cursor?: PendingActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingActivities.
     */
    distinct?: PendingActivityScalarFieldEnum | PendingActivityScalarFieldEnum[]
  }

  /**
   * PendingActivity findFirstOrThrow
   */
  export type PendingActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter, which PendingActivity to fetch.
     */
    where?: PendingActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingActivities to fetch.
     */
    orderBy?: PendingActivityOrderByWithRelationInput | PendingActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingActivities.
     */
    cursor?: PendingActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingActivities.
     */
    distinct?: PendingActivityScalarFieldEnum | PendingActivityScalarFieldEnum[]
  }

  /**
   * PendingActivity findMany
   */
  export type PendingActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter, which PendingActivities to fetch.
     */
    where?: PendingActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingActivities to fetch.
     */
    orderBy?: PendingActivityOrderByWithRelationInput | PendingActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingActivities.
     */
    cursor?: PendingActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingActivities.
     */
    skip?: number
    distinct?: PendingActivityScalarFieldEnum | PendingActivityScalarFieldEnum[]
  }

  /**
   * PendingActivity create
   */
  export type PendingActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingActivity.
     */
    data: XOR<PendingActivityCreateInput, PendingActivityUncheckedCreateInput>
  }

  /**
   * PendingActivity createMany
   */
  export type PendingActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingActivities.
     */
    data: PendingActivityCreateManyInput | PendingActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingActivity createManyAndReturn
   */
  export type PendingActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * The data used to create many PendingActivities.
     */
    data: PendingActivityCreateManyInput | PendingActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingActivity update
   */
  export type PendingActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingActivity.
     */
    data: XOR<PendingActivityUpdateInput, PendingActivityUncheckedUpdateInput>
    /**
     * Choose, which PendingActivity to update.
     */
    where: PendingActivityWhereUniqueInput
  }

  /**
   * PendingActivity updateMany
   */
  export type PendingActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingActivities.
     */
    data: XOR<PendingActivityUpdateManyMutationInput, PendingActivityUncheckedUpdateManyInput>
    /**
     * Filter which PendingActivities to update
     */
    where?: PendingActivityWhereInput
    /**
     * Limit how many PendingActivities to update.
     */
    limit?: number
  }

  /**
   * PendingActivity updateManyAndReturn
   */
  export type PendingActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * The data used to update PendingActivities.
     */
    data: XOR<PendingActivityUpdateManyMutationInput, PendingActivityUncheckedUpdateManyInput>
    /**
     * Filter which PendingActivities to update
     */
    where?: PendingActivityWhereInput
    /**
     * Limit how many PendingActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingActivity upsert
   */
  export type PendingActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingActivity to update in case it exists.
     */
    where: PendingActivityWhereUniqueInput
    /**
     * In case the PendingActivity found by the `where` argument doesn't exist, create a new PendingActivity with this data.
     */
    create: XOR<PendingActivityCreateInput, PendingActivityUncheckedCreateInput>
    /**
     * In case the PendingActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingActivityUpdateInput, PendingActivityUncheckedUpdateInput>
  }

  /**
   * PendingActivity delete
   */
  export type PendingActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
    /**
     * Filter which PendingActivity to delete.
     */
    where: PendingActivityWhereUniqueInput
  }

  /**
   * PendingActivity deleteMany
   */
  export type PendingActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingActivities to delete
     */
    where?: PendingActivityWhereInput
    /**
     * Limit how many PendingActivities to delete.
     */
    limit?: number
  }

  /**
   * PendingActivity without action
   */
  export type PendingActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingActivity
     */
    select?: PendingActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PendingActivity
     */
    omit?: PendingActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingActivityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    cellphoneNumber: 'cellphoneNumber',
    password: 'password',
    receiveNotify: 'receiveNotify',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    title: 'title',
    priority: 'priority',
    description: 'description',
    week_day: 'week_day',
    updated_at: 'updated_at',
    created_at: 'created_at',
    pendingSubjects: 'pendingSubjects'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const StudyRecordScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    dayOfWeek: 'dayOfWeek',
    minutesStudied: 'minutesStudied',
    created_at: 'created_at'
  };

  export type StudyRecordScalarFieldEnum = (typeof StudyRecordScalarFieldEnum)[keyof typeof StudyRecordScalarFieldEnum]


  export const PendingActivityScalarFieldEnum: {
    id: 'id',
    subjectId: 'subjectId',
    name: 'name',
    description: 'description',
    percentageConclud: 'percentageConclud',
    created_at: 'created_at'
  };

  export type PendingActivityScalarFieldEnum = (typeof PendingActivityScalarFieldEnum)[keyof typeof PendingActivityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cellphoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    receiveNotify?: BoolFilter<"User"> | boolean
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    subjects?: SubjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cellphoneNumber?: SortOrder
    password?: SortOrder
    receiveNotify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    cellphoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    receiveNotify?: BoolFilter<"User"> | boolean
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    subjects?: SubjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cellphoneNumber?: SortOrder
    password?: SortOrder
    receiveNotify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    cellphoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    receiveNotify?: BoolWithAggregatesFilter<"User"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    id_user?: StringFilter<"Subject"> | string
    title?: StringFilter<"Subject"> | string
    priority?: IntFilter<"Subject"> | number
    description?: StringFilter<"Subject"> | string
    week_day?: StringNullableListFilter<"Subject">
    updated_at?: DateTimeFilter<"Subject"> | Date | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    pendingSubjects?: StringNullableListFilter<"Subject">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyRecord?: StudyRecordListRelationFilter
    pendingActivities?: PendingActivityListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    week_day?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    pendingSubjects?: SortOrder
    user?: UserOrderByWithRelationInput
    studyRecord?: StudyRecordOrderByRelationAggregateInput
    pendingActivities?: PendingActivityOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id_user?: StringFilter<"Subject"> | string
    title?: StringFilter<"Subject"> | string
    priority?: IntFilter<"Subject"> | number
    description?: StringFilter<"Subject"> | string
    week_day?: StringNullableListFilter<"Subject">
    updated_at?: DateTimeFilter<"Subject"> | Date | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    pendingSubjects?: StringNullableListFilter<"Subject">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    studyRecord?: StudyRecordListRelationFilter
    pendingActivities?: PendingActivityListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    week_day?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    pendingSubjects?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    id_user?: StringWithAggregatesFilter<"Subject"> | string
    title?: StringWithAggregatesFilter<"Subject"> | string
    priority?: IntWithAggregatesFilter<"Subject"> | number
    description?: StringWithAggregatesFilter<"Subject"> | string
    week_day?: StringNullableListFilter<"Subject">
    updated_at?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    pendingSubjects?: StringNullableListFilter<"Subject">
  }

  export type StudyRecordWhereInput = {
    AND?: StudyRecordWhereInput | StudyRecordWhereInput[]
    OR?: StudyRecordWhereInput[]
    NOT?: StudyRecordWhereInput | StudyRecordWhereInput[]
    id?: StringFilter<"StudyRecord"> | string
    subjectId?: StringFilter<"StudyRecord"> | string
    dayOfWeek?: StringFilter<"StudyRecord"> | string
    minutesStudied?: IntFilter<"StudyRecord"> | number
    created_at?: DateTimeFilter<"StudyRecord"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type StudyRecordOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    dayOfWeek?: SortOrder
    minutesStudied?: SortOrder
    created_at?: SortOrder
    subject?: SubjectOrderByWithRelationInput
  }

  export type StudyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyRecordWhereInput | StudyRecordWhereInput[]
    OR?: StudyRecordWhereInput[]
    NOT?: StudyRecordWhereInput | StudyRecordWhereInput[]
    subjectId?: StringFilter<"StudyRecord"> | string
    dayOfWeek?: StringFilter<"StudyRecord"> | string
    minutesStudied?: IntFilter<"StudyRecord"> | number
    created_at?: DateTimeFilter<"StudyRecord"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type StudyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    dayOfWeek?: SortOrder
    minutesStudied?: SortOrder
    created_at?: SortOrder
    _count?: StudyRecordCountOrderByAggregateInput
    _avg?: StudyRecordAvgOrderByAggregateInput
    _max?: StudyRecordMaxOrderByAggregateInput
    _min?: StudyRecordMinOrderByAggregateInput
    _sum?: StudyRecordSumOrderByAggregateInput
  }

  export type StudyRecordScalarWhereWithAggregatesInput = {
    AND?: StudyRecordScalarWhereWithAggregatesInput | StudyRecordScalarWhereWithAggregatesInput[]
    OR?: StudyRecordScalarWhereWithAggregatesInput[]
    NOT?: StudyRecordScalarWhereWithAggregatesInput | StudyRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyRecord"> | string
    subjectId?: StringWithAggregatesFilter<"StudyRecord"> | string
    dayOfWeek?: StringWithAggregatesFilter<"StudyRecord"> | string
    minutesStudied?: IntWithAggregatesFilter<"StudyRecord"> | number
    created_at?: DateTimeWithAggregatesFilter<"StudyRecord"> | Date | string
  }

  export type PendingActivityWhereInput = {
    AND?: PendingActivityWhereInput | PendingActivityWhereInput[]
    OR?: PendingActivityWhereInput[]
    NOT?: PendingActivityWhereInput | PendingActivityWhereInput[]
    id?: StringFilter<"PendingActivity"> | string
    subjectId?: StringFilter<"PendingActivity"> | string
    name?: StringFilter<"PendingActivity"> | string
    description?: StringFilter<"PendingActivity"> | string
    percentageConclud?: IntFilter<"PendingActivity"> | number
    created_at?: DateTimeFilter<"PendingActivity"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type PendingActivityOrderByWithRelationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percentageConclud?: SortOrder
    created_at?: SortOrder
    subject?: SubjectOrderByWithRelationInput
  }

  export type PendingActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendingActivityWhereInput | PendingActivityWhereInput[]
    OR?: PendingActivityWhereInput[]
    NOT?: PendingActivityWhereInput | PendingActivityWhereInput[]
    subjectId?: StringFilter<"PendingActivity"> | string
    name?: StringFilter<"PendingActivity"> | string
    description?: StringFilter<"PendingActivity"> | string
    percentageConclud?: IntFilter<"PendingActivity"> | number
    created_at?: DateTimeFilter<"PendingActivity"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id">

  export type PendingActivityOrderByWithAggregationInput = {
    id?: SortOrder
    subjectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percentageConclud?: SortOrder
    created_at?: SortOrder
    _count?: PendingActivityCountOrderByAggregateInput
    _avg?: PendingActivityAvgOrderByAggregateInput
    _max?: PendingActivityMaxOrderByAggregateInput
    _min?: PendingActivityMinOrderByAggregateInput
    _sum?: PendingActivitySumOrderByAggregateInput
  }

  export type PendingActivityScalarWhereWithAggregatesInput = {
    AND?: PendingActivityScalarWhereWithAggregatesInput | PendingActivityScalarWhereWithAggregatesInput[]
    OR?: PendingActivityScalarWhereWithAggregatesInput[]
    NOT?: PendingActivityScalarWhereWithAggregatesInput | PendingActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingActivity"> | string
    subjectId?: StringWithAggregatesFilter<"PendingActivity"> | string
    name?: StringWithAggregatesFilter<"PendingActivity"> | string
    description?: StringWithAggregatesFilter<"PendingActivity"> | string
    percentageConclud?: IntWithAggregatesFilter<"PendingActivity"> | number
    created_at?: DateTimeWithAggregatesFilter<"PendingActivity"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at?: Date | string
    created_at?: Date | string
    subjects?: SubjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at?: Date | string
    created_at?: Date | string
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    user: UserCreateNestedOneWithoutSubjectsInput
    studyRecord?: StudyRecordCreateNestedManyWithoutSubjectInput
    pendingActivities?: PendingActivityCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    id_user: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedCreateNestedManyWithoutSubjectInput
    pendingActivities?: PendingActivityUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    studyRecord?: StudyRecordUpdateManyWithoutSubjectNestedInput
    pendingActivities?: PendingActivityUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedUpdateManyWithoutSubjectNestedInput
    pendingActivities?: PendingActivityUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    id_user: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
  }

  export type StudyRecordCreateInput = {
    id?: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
    subject: SubjectCreateNestedOneWithoutStudyRecordInput
  }

  export type StudyRecordUncheckedCreateInput = {
    id?: string
    subjectId: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
  }

  export type StudyRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutStudyRecordNestedInput
  }

  export type StudyRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordCreateManyInput = {
    id?: string
    subjectId: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
  }

  export type StudyRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityCreateInput = {
    id?: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
    subject: SubjectCreateNestedOneWithoutPendingActivitiesInput
  }

  export type PendingActivityUncheckedCreateInput = {
    id?: string
    subjectId: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
  }

  export type PendingActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutPendingActivitiesNestedInput
  }

  export type PendingActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityCreateManyInput = {
    id?: string
    subjectId: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
  }

  export type PendingActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cellphoneNumber?: SortOrder
    password?: SortOrder
    receiveNotify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cellphoneNumber?: SortOrder
    password?: SortOrder
    receiveNotify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cellphoneNumber?: SortOrder
    password?: SortOrder
    receiveNotify?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudyRecordListRelationFilter = {
    every?: StudyRecordWhereInput
    some?: StudyRecordWhereInput
    none?: StudyRecordWhereInput
  }

  export type PendingActivityListRelationFilter = {
    every?: PendingActivityWhereInput
    some?: PendingActivityWhereInput
    none?: PendingActivityWhereInput
  }

  export type StudyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendingActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    week_day?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    pendingSubjects?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    title?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type StudyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    dayOfWeek?: SortOrder
    minutesStudied?: SortOrder
    created_at?: SortOrder
  }

  export type StudyRecordAvgOrderByAggregateInput = {
    minutesStudied?: SortOrder
  }

  export type StudyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    dayOfWeek?: SortOrder
    minutesStudied?: SortOrder
    created_at?: SortOrder
  }

  export type StudyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    dayOfWeek?: SortOrder
    minutesStudied?: SortOrder
    created_at?: SortOrder
  }

  export type StudyRecordSumOrderByAggregateInput = {
    minutesStudied?: SortOrder
  }

  export type PendingActivityCountOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percentageConclud?: SortOrder
    created_at?: SortOrder
  }

  export type PendingActivityAvgOrderByAggregateInput = {
    percentageConclud?: SortOrder
  }

  export type PendingActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percentageConclud?: SortOrder
    created_at?: SortOrder
  }

  export type PendingActivityMinOrderByAggregateInput = {
    id?: SortOrder
    subjectId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percentageConclud?: SortOrder
    created_at?: SortOrder
  }

  export type PendingActivitySumOrderByAggregateInput = {
    percentageConclud?: SortOrder
  }

  export type SubjectCreateNestedManyWithoutUserInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUserInput | SubjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUserInput | SubjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUserInput | SubjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput> | SubjectCreateWithoutUserInput[] | SubjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutUserInput | SubjectCreateOrConnectWithoutUserInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutUserInput | SubjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubjectCreateManyUserInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutUserInput | SubjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutUserInput | SubjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectCreateweek_dayInput = {
    set: string[]
  }

  export type SubjectCreatependingSubjectsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput
    connect?: UserWhereUniqueInput
  }

  export type StudyRecordCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput> | StudyRecordCreateWithoutSubjectInput[] | StudyRecordUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutSubjectInput | StudyRecordCreateOrConnectWithoutSubjectInput[]
    createMany?: StudyRecordCreateManySubjectInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type PendingActivityCreateNestedManyWithoutSubjectInput = {
    create?: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput> | PendingActivityCreateWithoutSubjectInput[] | PendingActivityUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PendingActivityCreateOrConnectWithoutSubjectInput | PendingActivityCreateOrConnectWithoutSubjectInput[]
    createMany?: PendingActivityCreateManySubjectInputEnvelope
    connect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
  }

  export type StudyRecordUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput> | StudyRecordCreateWithoutSubjectInput[] | StudyRecordUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutSubjectInput | StudyRecordCreateOrConnectWithoutSubjectInput[]
    createMany?: StudyRecordCreateManySubjectInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type PendingActivityUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput> | PendingActivityCreateWithoutSubjectInput[] | PendingActivityUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PendingActivityCreateOrConnectWithoutSubjectInput | PendingActivityCreateOrConnectWithoutSubjectInput[]
    createMany?: PendingActivityCreateManySubjectInputEnvelope
    connect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubjectUpdateweek_dayInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SubjectUpdatependingSubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput
    upsert?: UserUpsertWithoutSubjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubjectsInput, UserUpdateWithoutSubjectsInput>, UserUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudyRecordUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput> | StudyRecordCreateWithoutSubjectInput[] | StudyRecordUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutSubjectInput | StudyRecordCreateOrConnectWithoutSubjectInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutSubjectInput | StudyRecordUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudyRecordCreateManySubjectInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutSubjectInput | StudyRecordUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutSubjectInput | StudyRecordUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type PendingActivityUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput> | PendingActivityCreateWithoutSubjectInput[] | PendingActivityUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PendingActivityCreateOrConnectWithoutSubjectInput | PendingActivityCreateOrConnectWithoutSubjectInput[]
    upsert?: PendingActivityUpsertWithWhereUniqueWithoutSubjectInput | PendingActivityUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: PendingActivityCreateManySubjectInputEnvelope
    set?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    disconnect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    delete?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    connect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    update?: PendingActivityUpdateWithWhereUniqueWithoutSubjectInput | PendingActivityUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: PendingActivityUpdateManyWithWhereWithoutSubjectInput | PendingActivityUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: PendingActivityScalarWhereInput | PendingActivityScalarWhereInput[]
  }

  export type StudyRecordUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput> | StudyRecordCreateWithoutSubjectInput[] | StudyRecordUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutSubjectInput | StudyRecordCreateOrConnectWithoutSubjectInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutSubjectInput | StudyRecordUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudyRecordCreateManySubjectInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutSubjectInput | StudyRecordUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutSubjectInput | StudyRecordUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type PendingActivityUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput> | PendingActivityCreateWithoutSubjectInput[] | PendingActivityUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PendingActivityCreateOrConnectWithoutSubjectInput | PendingActivityCreateOrConnectWithoutSubjectInput[]
    upsert?: PendingActivityUpsertWithWhereUniqueWithoutSubjectInput | PendingActivityUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: PendingActivityCreateManySubjectInputEnvelope
    set?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    disconnect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    delete?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    connect?: PendingActivityWhereUniqueInput | PendingActivityWhereUniqueInput[]
    update?: PendingActivityUpdateWithWhereUniqueWithoutSubjectInput | PendingActivityUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: PendingActivityUpdateManyWithWhereWithoutSubjectInput | PendingActivityUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: PendingActivityScalarWhereInput | PendingActivityScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutStudyRecordInput = {
    create?: XOR<SubjectCreateWithoutStudyRecordInput, SubjectUncheckedCreateWithoutStudyRecordInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudyRecordInput
    connect?: SubjectWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutStudyRecordNestedInput = {
    create?: XOR<SubjectCreateWithoutStudyRecordInput, SubjectUncheckedCreateWithoutStudyRecordInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudyRecordInput
    upsert?: SubjectUpsertWithoutStudyRecordInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudyRecordInput, SubjectUpdateWithoutStudyRecordInput>, SubjectUncheckedUpdateWithoutStudyRecordInput>
  }

  export type SubjectCreateNestedOneWithoutPendingActivitiesInput = {
    create?: XOR<SubjectCreateWithoutPendingActivitiesInput, SubjectUncheckedCreateWithoutPendingActivitiesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutPendingActivitiesInput
    connect?: SubjectWhereUniqueInput
  }

  export type SubjectUpdateOneRequiredWithoutPendingActivitiesNestedInput = {
    create?: XOR<SubjectCreateWithoutPendingActivitiesInput, SubjectUncheckedCreateWithoutPendingActivitiesInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutPendingActivitiesInput
    upsert?: SubjectUpsertWithoutPendingActivitiesInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutPendingActivitiesInput, SubjectUpdateWithoutPendingActivitiesInput>, SubjectUncheckedUpdateWithoutPendingActivitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubjectCreateWithoutUserInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    studyRecord?: StudyRecordCreateNestedManyWithoutSubjectInput
    pendingActivities?: PendingActivityCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedCreateNestedManyWithoutSubjectInput
    pendingActivities?: PendingActivityUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutUserInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput>
  }

  export type SubjectCreateManyUserInputEnvelope = {
    data: SubjectCreateManyUserInput | SubjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutUserInput, SubjectUncheckedUpdateWithoutUserInput>
    create: XOR<SubjectCreateWithoutUserInput, SubjectUncheckedCreateWithoutUserInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutUserInput, SubjectUncheckedUpdateWithoutUserInput>
  }

  export type SubjectUpdateManyWithWhereWithoutUserInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutUserInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    id_user?: StringFilter<"Subject"> | string
    title?: StringFilter<"Subject"> | string
    priority?: IntFilter<"Subject"> | number
    description?: StringFilter<"Subject"> | string
    week_day?: StringNullableListFilter<"Subject">
    updated_at?: DateTimeFilter<"Subject"> | Date | string
    created_at?: DateTimeFilter<"Subject"> | Date | string
    pendingSubjects?: StringNullableListFilter<"Subject">
  }

  export type UserCreateWithoutSubjectsInput = {
    id?: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutSubjectsInput = {
    id?: string
    name: string
    email: string
    cellphoneNumber: string
    password: string
    receiveNotify: boolean
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSubjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
  }

  export type StudyRecordCreateWithoutSubjectInput = {
    id?: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
  }

  export type StudyRecordUncheckedCreateWithoutSubjectInput = {
    id?: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
  }

  export type StudyRecordCreateOrConnectWithoutSubjectInput = {
    where: StudyRecordWhereUniqueInput
    create: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput>
  }

  export type StudyRecordCreateManySubjectInputEnvelope = {
    data: StudyRecordCreateManySubjectInput | StudyRecordCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type PendingActivityCreateWithoutSubjectInput = {
    id?: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
  }

  export type PendingActivityUncheckedCreateWithoutSubjectInput = {
    id?: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
  }

  export type PendingActivityCreateOrConnectWithoutSubjectInput = {
    where: PendingActivityWhereUniqueInput
    create: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput>
  }

  export type PendingActivityCreateManySubjectInputEnvelope = {
    data: PendingActivityCreateManySubjectInput | PendingActivityCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubjectsInput = {
    update: XOR<UserUpdateWithoutSubjectsInput, UserUncheckedUpdateWithoutSubjectsInput>
    create: XOR<UserCreateWithoutSubjectsInput, UserUncheckedCreateWithoutSubjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubjectsInput, UserUncheckedUpdateWithoutSubjectsInput>
  }

  export type UserUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cellphoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    receiveNotify?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudyRecordWhereUniqueInput
    update: XOR<StudyRecordUpdateWithoutSubjectInput, StudyRecordUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudyRecordCreateWithoutSubjectInput, StudyRecordUncheckedCreateWithoutSubjectInput>
  }

  export type StudyRecordUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudyRecordWhereUniqueInput
    data: XOR<StudyRecordUpdateWithoutSubjectInput, StudyRecordUncheckedUpdateWithoutSubjectInput>
  }

  export type StudyRecordUpdateManyWithWhereWithoutSubjectInput = {
    where: StudyRecordScalarWhereInput
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudyRecordScalarWhereInput = {
    AND?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
    OR?: StudyRecordScalarWhereInput[]
    NOT?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
    id?: StringFilter<"StudyRecord"> | string
    subjectId?: StringFilter<"StudyRecord"> | string
    dayOfWeek?: StringFilter<"StudyRecord"> | string
    minutesStudied?: IntFilter<"StudyRecord"> | number
    created_at?: DateTimeFilter<"StudyRecord"> | Date | string
  }

  export type PendingActivityUpsertWithWhereUniqueWithoutSubjectInput = {
    where: PendingActivityWhereUniqueInput
    update: XOR<PendingActivityUpdateWithoutSubjectInput, PendingActivityUncheckedUpdateWithoutSubjectInput>
    create: XOR<PendingActivityCreateWithoutSubjectInput, PendingActivityUncheckedCreateWithoutSubjectInput>
  }

  export type PendingActivityUpdateWithWhereUniqueWithoutSubjectInput = {
    where: PendingActivityWhereUniqueInput
    data: XOR<PendingActivityUpdateWithoutSubjectInput, PendingActivityUncheckedUpdateWithoutSubjectInput>
  }

  export type PendingActivityUpdateManyWithWhereWithoutSubjectInput = {
    where: PendingActivityScalarWhereInput
    data: XOR<PendingActivityUpdateManyMutationInput, PendingActivityUncheckedUpdateManyWithoutSubjectInput>
  }

  export type PendingActivityScalarWhereInput = {
    AND?: PendingActivityScalarWhereInput | PendingActivityScalarWhereInput[]
    OR?: PendingActivityScalarWhereInput[]
    NOT?: PendingActivityScalarWhereInput | PendingActivityScalarWhereInput[]
    id?: StringFilter<"PendingActivity"> | string
    subjectId?: StringFilter<"PendingActivity"> | string
    name?: StringFilter<"PendingActivity"> | string
    description?: StringFilter<"PendingActivity"> | string
    percentageConclud?: IntFilter<"PendingActivity"> | number
    created_at?: DateTimeFilter<"PendingActivity"> | Date | string
  }

  export type SubjectCreateWithoutStudyRecordInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    user: UserCreateNestedOneWithoutSubjectsInput
    pendingActivities?: PendingActivityCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudyRecordInput = {
    id?: string
    id_user: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    pendingActivities?: PendingActivityUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudyRecordInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudyRecordInput, SubjectUncheckedCreateWithoutStudyRecordInput>
  }

  export type SubjectUpsertWithoutStudyRecordInput = {
    update: XOR<SubjectUpdateWithoutStudyRecordInput, SubjectUncheckedUpdateWithoutStudyRecordInput>
    create: XOR<SubjectCreateWithoutStudyRecordInput, SubjectUncheckedCreateWithoutStudyRecordInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudyRecordInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudyRecordInput, SubjectUncheckedUpdateWithoutStudyRecordInput>
  }

  export type SubjectUpdateWithoutStudyRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    pendingActivities?: PendingActivityUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudyRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    pendingActivities?: PendingActivityUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateWithoutPendingActivitiesInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    user: UserCreateNestedOneWithoutSubjectsInput
    studyRecord?: StudyRecordCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutPendingActivitiesInput = {
    id?: string
    id_user: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutPendingActivitiesInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutPendingActivitiesInput, SubjectUncheckedCreateWithoutPendingActivitiesInput>
  }

  export type SubjectUpsertWithoutPendingActivitiesInput = {
    update: XOR<SubjectUpdateWithoutPendingActivitiesInput, SubjectUncheckedUpdateWithoutPendingActivitiesInput>
    create: XOR<SubjectCreateWithoutPendingActivitiesInput, SubjectUncheckedCreateWithoutPendingActivitiesInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutPendingActivitiesInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutPendingActivitiesInput, SubjectUncheckedUpdateWithoutPendingActivitiesInput>
  }

  export type SubjectUpdateWithoutPendingActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput
    studyRecord?: StudyRecordUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutPendingActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyUserInput = {
    id?: string
    title: string
    priority?: number
    description: string
    week_day?: SubjectCreateweek_dayInput | string[]
    updated_at?: Date | string
    created_at?: Date | string
    pendingSubjects?: SubjectCreatependingSubjectsInput | string[]
  }

  export type SubjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUpdateManyWithoutSubjectNestedInput
    pendingActivities?: PendingActivityUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
    studyRecord?: StudyRecordUncheckedUpdateManyWithoutSubjectNestedInput
    pendingActivities?: PendingActivityUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    week_day?: SubjectUpdateweek_dayInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pendingSubjects?: SubjectUpdatependingSubjectsInput | string[]
  }

  export type StudyRecordCreateManySubjectInput = {
    id?: string
    dayOfWeek: string
    minutesStudied: number
    created_at?: Date | string
  }

  export type PendingActivityCreateManySubjectInput = {
    id?: string
    name: string
    description: string
    percentageConclud: number
    created_at?: Date | string
  }

  export type StudyRecordUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    minutesStudied?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingActivityUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentageConclud?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}