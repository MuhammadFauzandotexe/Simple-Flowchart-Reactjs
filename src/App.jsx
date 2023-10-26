import React, { useCallback } from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import CostumeNode from "./component/CostumeNode.jsx";

const initialNodes = [
    { id: 'tittle', position: { x: 300, y: 100 },data: { label: 'React.js Application Flow'}},
    { id: 'user', position: { x: 600, y: 100 }, data: { label: 'Users'}},
    { id: 'app-routing', position: { x: 600, y: 200 }, data: { label: 'App-Routing'}},
    { id: 'view', position: { x: 600, y: 300 }, data: { label: 'View'}},
    { id: 'component-1', position: { x: 300, y: 400 }, data: { label: 'Components'}},
    { id: 'component-2', position: { x: 600, y: 400 }, data: { label: 'Components'}},
    { id: 'component-3', position: { x: 900, y: 400 }, data: { label: 'Components'}},
    { id: 'redux', position: { x: 600, y: 500 }, data: { label: 'Redux'}},
    { id: 'api', position: { x: 600, y: 600 }, data: { label: 'Api'}},
];
const initialEdges = [
    { id: 'euser-2', source: 'user', target: 'app-routing' },
    { id: 'eapp-routing-view', source: 'app-routing', target: 'view' },
    { id: 'eview', source: 'view', target: 'component-1' },
    { id: 'eview', source: 'view', target: 'component-2' },
    { id: 'eview', source: 'view', target: 'component-3' },

    { id: 'ecomponent-2', source: 'component-2', target: 'redux' },
    { id: 'eredux', source: 'redux', target: 'api' },
];

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={{CostumeNode:CostumeNode}}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}
