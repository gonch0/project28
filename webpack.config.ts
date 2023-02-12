import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
    BuildEnv,
    BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration   => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = 3000;

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};